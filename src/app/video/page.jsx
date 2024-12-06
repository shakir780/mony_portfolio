"use client";
import React, { useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { motion, useInView } from "framer-motion";

const videos = [
  { id: "Kh0pP0nLkWg" },
  { id: "X0mN1muT_c0" },
  { id: "WaP8dCIt9Qo" },
  { id: "RIKZhalOUv0" },
  { id: "0wXcu0l9KrY" },
  { id: "48Fvh4Pl9vE" },
  { id: "nTB5qNwSwCs" },
];
const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="bg-gray-100">
      <div className="py-[100px] px-[50px] ">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}} //
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.4,
              }}
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-[600px] object-cover h-[400px] cursor-pointer"
                />
                <span className="absolute inset-0 flex justify-center items-center cursor-pointer hover:text-gray-300 text-white text-7xl">
                  <CiPlay1 />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className=" rounded-lg shadow-lg p-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <>
                <iframe
                  width="800"
                  height="515"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
