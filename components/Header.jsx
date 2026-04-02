import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      <Link href="/">
        <Image
          src="/logo(4).png"
          alt="Mockify Logo"
          width={100}
          height={100}
          className="h-11 w-auto"
        />
      </Link>
    </nav>
  );
};

export default Header;
