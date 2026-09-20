import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

export function Logo() {
  return (
    <Link href="#home" className="logo" aria-label="PUREON home">
      <span className="logo__mark">
        <FaLeaf aria-hidden="true" />
      </span>
      <span className="logo__word">PUREON</span>
    </Link>
  );
}
