"use client";
import Image from "next/image";
import React from "react";
import Pic1 from "../assets/mony_pic4.jpg";
import { Dancing_Script, Roboto } from "next/font/google";
import { motion } from "framer-motion";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const HeroSection = () => {
  const imageVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: "50%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };
  return (
    <div className="bg-gray-100">
      <div className="py-[100px] ">
        <div className="flex-col flex items-center lg:flex-row gap-8 justify-between">
          <motion.div
            className="w-full"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative lg:w-[650px] h-[670px]">
              <Image
                src={Pic1}
                alt="hero"
                layout="fill"
                objectFit="cover"
                className="z-0 w-full"
              />
              <div className="absolute inset-0 bg-black/50 z-10"></div>
            </div>
          </motion.div>

          <div
            className={`${roboto.variable} mt-[100px] flex gap-4 flex-col px-8`}
          >
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
              className="text-3xl lg:text-4xl text-center lg:text-start font-normal leading-[60px] text-[#964B00]"
            >
              I'm Monsurah Kamal, a media creative passionate about storytelling
              through visuals.
            </motion.span>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
              className="text-md text-[#343131] font-light leading-10"
            >
              My passion lies in storytelling through visuals—whether it’s
              documenting events, creating cultural pieces, or producing
              promotional content that connects with people. I focus on
              capturing authentic moments and presenting them in a way{" "}
              <br className="hidden lg:block" />
              that feels meaningful and professional.
            </motion.span>
            <motion.a
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
              href="mailto:lifewithmonsurah@gmail.com"
            >
              <button className="px-[20px] py-4 mt-[40px] hover:opacity-80 font-semibold bg-[#D8A25E] w-fit">
                Get in touch
              </button>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
