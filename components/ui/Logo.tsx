import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="#home" className="logo" aria-label="PUREON home">
      <Image
        src="/images/logo.png"
        alt="PUREON"
        width={160}
        height={50}
        priority
      />
    </Link>
  );
}