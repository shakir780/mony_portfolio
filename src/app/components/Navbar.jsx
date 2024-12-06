"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Dancing_Script } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing_script",
});
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="h-[18vh] justify-between px-16 w-full flex items-center bg-[#343131]">
        <Link href="/" className="flex  cursor-pointer flex-col items-center ">
          <Image src={Logo} alt="Logo" width={80} height={80} />
          <div className="flex text-xs flex-col items-center">
            <span
              className={`text-[#964B00] text-lg ${DancingScript.className}`}
            >
              MonyT
            </span>
            <div className="flex gap-1 items-center">
              <span className="w-[20px] bg-[#964B00] h-[0.5px]" />
              <span className="text-[#D8A25E]">Media Production</span>
              <span className="w-[20px] bg-[#964B00] h-[0.5px]" />
            </div>
          </div>
        </Link>

        <div className="hidden md:flex gap-3 items-center text-[#D8A25E]">
          <Link
            href="/"
            className={`hover:underline transition-all duration-400 ease-in-out cursor-pointer ${
              pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:underline transition-all duration-400 ease-in-out cursor-pointer ${
              pathname === "/about" ? "underline" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/video"
            className={`hover:underline transition-all duration-400 ease-in-out cursor-pointer ${
              pathname === "/video" ? "underline" : ""
            }`}
          >
            Video
          </Link>
          <div className="bg-[#D8A25E] cursor-pointer hover:opacity-90 p-2 rounded-md">
            <a href="mailto:lifewithmonsurah@gmail.com" className="text-black">
              Email
            </a>
          </div>
        </div>
        <span
          onClick={() => setOpenSidebar(!openSidebar)}
          className="md:hidden cursor-pointer text-3xl text-[#D8A25E] inline-block"
        >
          <RxHamburgerMenu />
        </span>
      </div>

      <Sidebar
        isOpen={openSidebar}
        Logo={Logo}
        DancingScript={DancingScript}
        onClose={() => setOpenSidebar(false)}
      />
    </>
  );
};

export default Navbar;
