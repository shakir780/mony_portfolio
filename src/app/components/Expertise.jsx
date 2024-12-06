"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import MonyExpertisePic from "../assets/mony_pic1.jpg";
import { motion, useInView } from "framer-motion";

const Expertise = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Videography",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Capture Your Events:</strong> I’ll help you relive your
            special moments—weddings, birthdays, seminars, or other events—by
            creating beautiful, professionally shot videos.
          </li>
          <li>
            <strong>Tell Your Brand’s Story:</strong> Let’s create engaging
            promotional videos that showcase your business, product, or service
            in a way that grabs attention.
          </li>
          <li>
            <strong>Bring Ideas to Life:</strong> Whether it’s a cultural
            documentary, a short film, or something creative, I can help you
            tell powerful stories through visuals.
          </li>
          <li>
            <strong>Show Behind-the-Scenes Magic:</strong> I’ll capture the
            moments that make your events or projects come to life behind the
            scenes.
          </li>
        </ul>
      ),
    },
    {
      title: "Photography",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Event Photography:</strong> Stunning photos that capture the
            energy and emotion of your events, so you can keep those memories
            forever.
          </li>
          <li>
            <strong>Creative Photoshoots:</strong> From cultural-themed shoots
            to personal or family branding sessions, I’ll help you tell your
            story through images that feel authentic and unique.
          </li>
          <li>
            <strong>Quick Mini-Shoots:</strong> Perfect for headshots, social
            media content, or just because—you’ll get beautiful photos in no
            time.
          </li>
        </ul>
      ),
    },
    {
      title: "Editing & Post-Production",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Bring Your Videos to Life:</strong> I’ll take your raw
            footage and turn it into a polished, professional video that tells
            your story perfectly.
          </li>
          <li>
            <strong>Enhance Your Photos:</strong> From subtle edits to
            professional retouching, I’ll make sure your images look their
            absolute best.
          </li>
        </ul>
      ),
    },
    {
      title: "Creative Brainstorming",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Visual Storytelling:</strong> Need ideas? I can help you
            brainstorm creative concepts for your events, brand promotions, or
            cultural shoots.
          </li>
          <li>
            <strong>Content Creation:</strong> Let’s work together to create
            visuals that will make your social media or projects stand out.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <div className="bg-gray-100">
      <div
        ref={ref}
        className="py-[100px] px-[100px] gap-8 items-center flex xl:flex-row flex-col-reverse justify-between"
      >
        <div className="w-full flex flex-col gap-8">
          <motion.span
            initial={{ y: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { y: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-center text-[#964B00]"
          >
            Expertise
          </motion.span>

          {services.map((service, index) => (
            <motion.div
              ref={ref}
              key={index}
              className="border-b-[0.1px] text-[#964B00] border-[#a5784b] overflow-hidden"
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}} //
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.4, // Stagger animation by index
              }}
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-md font-semibold text-[#964B00]">
                  {service.title}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 py-2 text-[#964B00]">
                  {service.content}
                </div>
              </div>
            </motion.div>
          ))}
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="px-[20px] py-4 mt-[40px] hover:opacity-80 font-semibold bg-[#D8A25E] w-fit"
          >
            View Work
          </motion.button>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <motion.div
            initial={{ x: 100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { x: 0, opacity: 1 } : {}} // Animation when in view
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:w-[650px] h-[670px]"
          >
            <Image
              src={MonyExpertisePic}
              alt="hero"
              layout="fill"
              objectFit="cover"
              className="z-0 w-full"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
