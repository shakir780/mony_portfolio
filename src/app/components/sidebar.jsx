import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { Dancing_Script, Roboto } from "next/font/google";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const DancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing_script",
});

const Sidebar = ({ onClose, isOpen }) => {
  const sidebarVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },

    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 2 },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  if (!isOpen) return null;

  return (
    <motion.div
      className="bg-[#ebc9a0] w-full h-[100vh] fixed inset-0 z-50"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="px-16 py-6 flex items-center justify-between">
        <span className="flex flex-col items-center ">
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
          >
            <Image src={Logo} alt="Logo" width={80} height={80} />
          </motion.div>

          <motion.div
            className="flex text-xs flex-col items-center"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
          >
            <span
              className={`text-[#964B00] text-lg ${DancingScript.className}`}
            >
              MonyT
            </span>
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1.3 }}
              className="flex gap-1 items-center"
            >
              <span className="w-[20px] bg-[#964B00] h-[0.5px]" />
              <span className="text-[#D8A25E]">Media Production</span>
              <span className="w-[20px] bg-[#964B00] h-[0.5px]" />
            </motion.div>
          </motion.div>
        </span>

        <span
          onClick={onClose}
          className="cursor-pointer text-3xl text-[#D8A25E] inline-block"
        >
          <IoMdClose />
        </span>
      </div>

      <div className="flex mt-16 flex-col  w-full  justify-between items-center">
        <div className={`flex text-[#343131] flex-col text-3xl gap-4 `}>
          <motion.span
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.2 }}
            className={`hover:underline transition-all duration-400 ease-in-out cursor-pointer`}
          >
            Home
          </motion.span>
          <motion.span
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.4 }}
            className="hover:underline transition-all duration-400 ease-in-out cursor-pointer"
          >
            About
          </motion.span>
          <motion.span
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.6 }}
            className="hover:underline transition-all duration-400 ease-in-out cursor-pointer"
          >
            Video
          </motion.span>
        </div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.8 }}
          className="bg-[#D8A25E] mt-32 px-16 py-4 rounded-md"
        >
          <span className="text-[#343131] text-3xl">Email</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
