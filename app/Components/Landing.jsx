"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Services from "@/app/Components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";

export default function Herosection() {
  const wallpapers = [
    "https://i.pinimg.com/1200x/3d/a2/ff/3da2ff5885352de5340988e0032ace35.jpg",
    "https://i.pinimg.com/1200x/9d/fc/61/9dfc61258cd6884a5006a8381f2554df.jpg",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    "https://i.pinimg.com/1200x/88/d1/3f/88d13f693d1f56d721247a4642bea7a4.jpg",
  ];

  const textLines = [
    "Building Excellence. Creating Landmarks.",
    "Engineering Spaces That Inspire.",
    "Delivering Trust Through Precision.",
    "Innovating Construction for Tomorrow.",
  ];

  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const imgInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % wallpapers.length);
    }, 5000);

    const txtInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textLines.length);
    }, 4000);

    return () => {
      clearInterval(imgInterval);
      clearInterval(txtInterval);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 font-[var(--font-poppins)]">

      <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND SLIDER */}
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={wallpapers[index]}
              alt="Construction wallpaper"
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* TEXT LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-white text-left w-full max-w-7xl px-6 md:px-12 flex justify-start"
        >
          <div className="max-w-2xl" data-aos="fade-right">

            {/* Smooth Changing Text */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                {textLines[textIndex]}
              </motion.h1>
            </AnimatePresence>

            <p
              className="mt-4 text-lg md:text-xl opacity-90"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Premium construction solutions designed with precision, innovation,
              and long-lasting quality.
            </p>

            {/* Transparent Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="
                mt-6 inline-block border border-white/60 
                text-white px-10 py-4 rounded-xl 
                hover:bg-white hover:text-black 
                transition-all duration-300 
                backdrop-blur-md bg-white/10
              "
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Get a Free Estimate
            </motion.a>
          </div>
        </motion.div>

      </section>

      

     


     

     

    </div>
  );
}
