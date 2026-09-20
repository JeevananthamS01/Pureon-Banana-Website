import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(160),
  phone: z.string().min(7).max(30),
  message: z.string().min(10).max(2500),
  website: z.string().max(0).optional()
});

type RateEntry = { count: number; resetAt: number };
const rateMap = new Map<string, RateEntry>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

function getClientKey(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

function allowed(key: string) {
  const now = Date.now();
  const current = rateMap.get(key);
  if (!current || current.resetAt < now) {
    rateMap.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (current.count >= LIMIT) return false;
  current.count += 1;
  return true;
}

export async function POST(request: Request) {
  const key = getClientKey(request);
  if (!allowed(key)) return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });

  try {
    const body: unknown = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ message: "Please check the form fields and try again." }, { status: 400 });
    if (parsed.data.website) return NextResponse.json({ message: "Thanks." }, { status: 200 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) return NextResponse.json({ message: "Email service is not configured yet." }, { status: 500 });

    const resend = new Resend(apiKey);
    const { name, email, phone, message } = parsed.data;
    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `PUREON website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    });

    if (result.error) return NextResponse.json({ message: "We could not send your enquiry. Please try again." }, { status: 502 });
    return NextResponse.json({ message: "Enquiry sent." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "We could not process your enquiry." }, { status: 500 });
  }
}
