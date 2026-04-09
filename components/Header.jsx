// Header.jsx (Server Component)

import { checkUser } from "@/lib/checkUser";
import Link from "next/link";
import HeaderAction from "./HeaderAction";
import Image from "next/image";
import RoleRedirect from "./RoleRedirect";

const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 h-16 border-b border-white/7 backdrop-blur-xl">
      <Link href="/">
        <Image
          src="/mockify-3.png"
          alt="Mockify Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>

      {/* RoleRedirect logic */}
      {user && <RoleRedirect />}

      <HeaderAction user={user} />
    </nav>
  );
};

export default Header;
