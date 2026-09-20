"use Clients";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { navItems, site } from "@/data/site";
import Newsletter from "./NewsLetter";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="#home" className="logo logo--footer">
            <span className="logo__mark">✦</span>
            <span className="logo__word">PUREON</span>
          </Link>
          <p className="text-para">
            From Nature to Quality. PUREON delivers quality, hygienically
            processed, and reliable natural food ingredients for local and
            international markets.
          </p>
          <div className="socials" aria-label="Social links">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="X">
              <FaXTwitter />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <ul className="footer-links">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-heading">Product</p>
          <ul className="footer-links">
            <li>
              <Link href="#products">Nendharam Banana Health Mix</Link>
            </li>
            <li>
              <Link href="#products">250 g pack</Link>
            </li>
            <li>
              <Link href="#products">Ingredients & Nutrition</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <ul className="footer-contact">
            <li>
              <FiMapPin />
              <span>{site.address}</span>
            </li>
            <li>
              <FiPhone />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <FiMail />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-newsletter">
        <span className="text-subtitle">Stay Connected</span>

        <h3 className="text-title">Get updates from PUREON</h3>

        <Newsletter />
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} PUREON. From Nature to Quality.
        </span>
        <Link href="#home">Back to top ↑</Link>
      </div>
    </footer>
  );
}
