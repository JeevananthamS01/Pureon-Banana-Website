# PUREON Banana Health Mix

Production-oriented single-page PUREON landing site built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, GSAP + ScrollTrigger, react-hook-form, Zod, react-hot-toast and Resend.

## Current stack

The project is pinned to the current package lines used when this starter was prepared: Next.js 16.3.5, React 19.3, Tailwind CSS 4.3, Framer Motion 13.4, GSAP 3.15, Zod 4.6, react-hook-form 7.88, react-hot-toast 2.6, react-icons 5.7 and Resend 6.28.

## Install

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run typecheck
npm run build
npm start
```

Deploy to Vercel by importing the repository and adding the environment variables below.

## Environment variables

Copy `.env.example` to `.env.local`.

- `NEXT_PUBLIC_SITE_URL` — canonical site URL.
- `RESEND_API_KEY` — Resend API key.
- `CONTACT_TO_EMAIL` — inbox that receives contact enquiries.
- `CONTACT_FROM_EMAIL` — verified sender, for example `PUREON Website <hello@yourdomain.com>`.

For Resend, verify your sending domain before using a production sender address. The local `.env.example` uses a placeholder sender.

## Assets

Product assets are in `public/images/products/`:

- `product-front.png`
- `product-back.png`

Agrandir font files are in `public/fonts/` and are loaded through `next/font/local` in `app/layout.tsx`.

To swap product images, replace those two files or update `site.product.front` and `site.product.back` in `data/site.ts`.

To swap fonts, replace the three `.otf` files and update the corresponding `localFont` declarations in `app/layout.tsx`.

## 3D product rotation

The product is a CSS 3D cube with two faces. The front image sits on the first face and the back image is rotated 180 degrees on the reverse face. On desktop, GSAP ScrollTrigger pins the product stage and scrubs `rotateY` from 0 to 180 degrees while the information panels crossfade. The Front/Back controls use the same cube transform without requiring WebGL or Three.js.

## Contact API

`POST /api/contact` validates the request with Zod, rejects honeypot submissions, applies a small in-memory IP rate limit and sends the enquiry through Resend. For a multi-instance production environment, move the rate limiter to a shared store such as Redis/Upstash.

## Content

All editable business/product content lives in `data/site.ts`. Update that file for future product lines, process steps, testimonials, social links or contact details.

## Accessibility/performance

- Semantic section structure and skip link.
- Keyboard focus states.
- Reduced-motion support.
- `next/image` for product assets.
- Heavy GSAP pinning is limited to desktop.
- Static content remains server-rendered wherever possible.
