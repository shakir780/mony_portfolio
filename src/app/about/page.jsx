"use client";
import { inView, motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import AboutPic from "../assets/about.jpg";
import Image from "next/image";

async function generateMetadata() {
  return {
    title: "About Us - MonyTMediaProduction",
    description: "Learn more about MonyTMediaProduction",
    icons: {
      rel: "icon",
      url: "/favicon.ico",
    },
  };
}
const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="bg-gray-100 py-[100px] h-fit">
      <div className="flex px-[30px] flex-col xl:flex-row-reverse gap-[4rem] justify-between ">
        <div ref={ref} className="w-full">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:w-[680px] h-[770px]"
          >
            <Image
              src={AboutPic}
              alt="hero"
              layout="fill"
              objectFit="cover"
              className="z-0 w-full"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-10 text-lg leading-9"
        >
          <span className="text-4xl font-bold text-[#964B00]">About</span>
          <span className="text-[#964B00]">
            Hi, I’m Monsurah Kamal! I’m a creative at heart with a passion for
            capturing moments that tell a story. Whether it’s through *photos*
            or *videos*, I love bringing people’s ideas and emotions to life
            with the power of visual storytelling. <br /> <br /> I’ve had the
            pleasure of working on a variety of projects—everything from
            weddings and family events to brand promos and cultural photoshoots.
            What I love most about what I do is connecting with my clients,
            making them feel comfortable, and bringing their vision into
            something beautiful and meaningful. Whether you need a video that
            tells your brand’s story, or a set of photos that capture the
            essence of an event, I’m here to make it happen. <br />
            <br />I also offer editing and post-production services to ensure
            everything looks polished and professional. I’m all about creating
            memorable, heartfelt content, and I’d love to help bring your next
            project to life. Let’s connect and create something amazing
            together!
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
