// Header.jsx (Server Component)

import { checkUser } from "@/lib/checkUser";
import Link from "next/link";
import HeaderAction from "./HeaderAction";
import Image from "next/image";

const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      <Link href="/">
        <Image
          src="/logo(4).png"
          alt="Prept Logo"
          width={100}
          height={100}
          className="h-11 w-auto"
        />
      </Link>

      <HeaderAction user={user} />
    </nav>
  );
};

export default Header;
