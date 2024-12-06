"use client";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const testimonials = [
  {
    text: `"Working with Monsurah was an absolute pleasure! They captured every special moment of our wedding beautifully, from the emotions during the vows to the joy on the dance floor. The video was so well-edited—it felt like we were reliving the day all over again. We couldn’t have asked for a better videographer!"`,
    author: "– The Nkeanyadi",
    type: "Event Coverage",
  },
  {
    text: `"I was blown away by the creativity and attention to detail during our cultural videoshoot. Monsurah made me feel comfortable and brought the vision to life in a way I didn’t think was possible. The videos are stunning, and they perfectly capture the essence of my culture with a modern touch. I’ll definitely work with her again!"`,
    author: "– Bilkisu",
    type: "Cultural Shoot",
  },
  {
    text: `"I reached out to Monsurah to create a promotional video for my small business, and she exceeded my expectations! The video was vibrant, professional, and told my brand’s story so well. Since posting it online, I’ve seen a significant increase in customer engagement. Highly recommend their services!"`,
    author: "– Ahmed, Small Business Owner",
    type: "Promotional Video",
  },
];
const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="py-12 px-4 bg-gray-100">
      <motion.h2
        ref={ref}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
        className="text-2xl font-bold text-center text-[#964B00] mb-[50px]"
      >
        What People Are Saying
      </motion.h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }} // Initial animation values (start from slightly below and invisible)
            animate={inView ? { x: 0, opacity: 1 } : {}} //
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: index * 0.4, // Stagger animation by index
            }}
            className={`relative w-full lg:w-[400px] lg:h-[300px] bg-white p-6 rounded-xl shadow-lg transition-transform transform ${
              index === 1
                ? "lg:scale-105 shadow-2xl bg-[#FFF6E5]"
                : "hover:scale-105"
            }`}
          >
            <h3 className="text-lg font-semibold text-[#964B00] mb-2">
              {testimonial.type} Testimonial
            </h3>
            <p className="text-sm text-gray-700 italic mb-4">
              "{testimonial.text}"
            </p>
            <p className="text-right text-md font-bold text-[#964B00]">
              {testimonial.author}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
