import Image from "next/image";
import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import Logo from "../assets/logo.png";
import { Dancing_Script } from "next/font/google";
const DancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing_script",
});
const Footer = () => {
  return (
    <footer className="bg-[#a7631f] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="">
            <h2 className="text-lg font-bold mb-3">About Monsurah</h2>
            <p className="text-sm text-gray-200">
              Capturing the essence of your moments and stories through <br />
              stunning videography and photography. Let's bring your visions to
              life.
            </p>
          </div>

          <div className="">
            <h2 className="text-lg font-bold mb-3">Contact</h2>
            <ul className="space-y-1">
              <li className="text-gray-200 text-lg underline hover:text-gray-300">
                lifewithmonsurah@gmail.com
              </li>
              <li className="text-gray-200 text-lg underline hover:text-gray-300">
                +2347080187054
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-lg font-bold mb-3">Socials</h2>
            <div className="flex gap-3 items-center text-3xl ">
              <a
                className="hover:text-blue-400"
                href="https://web.facebook.com/profile.php?id=61551210504654&mibextid=LQQJ4d&rdid=aBMhpr0DDtPA5ptC"
              >
                <IoLogoFacebook />
              </a>
              <a
                className="hover:text-red-300"
                href="https://www.instagram.com/mony_t_media_productions/?utm_source=qr"
              >
                <IoLogoInstagram />
              </a>
              <a
                className="hover:text-black"
                href="https://www.tiktok.com/@monsurahmediaproductions?_t=ZS-8rxdHzIJXaZ&_r=1"
              >
                <IoLogoTiktok />
              </a>
              <a
                href="https://wa.me/+2347080187054"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className=" hover:text-green-600"
              >
                <IoLogoWhatsapp className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-300 mt-8">
          © {new Date().getFullYear()} Monsurah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
