import logo from "../../public/logo.png";
import logoText from "../../public/logoText.png";
import Link from "next/link";
import Image from "next/dist/client/image";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <div class="logo">
          <Image src={logo} width="48px" height="48px" placeholder="blur" />
          <Image
            src={logoText}
            width="204px"
            height="48px"
            placeholder="blur"
          />
        </div>
      </Link>
    </div>
  );
}
