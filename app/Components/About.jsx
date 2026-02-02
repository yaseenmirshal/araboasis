"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "./Count";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <div
          className="relative w-full h-[520px]"
          data-aos="fade-right"
        >
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Ara Oasis Construction Saudi Arabia"
            fill
            className="object-cover"
            priority
          />
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-green-900/10" />
        </div>

        {/* CONTENT */}
        <div data-aos="fade-left">
          <p className="text-[12px] tracking-[5px] text-green-700 mb-4">
            ABOUT ARAB OASIS
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-8 leading-tight">
            Building Trust Through <br /> Excellence & Commitment
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Ara Oasis is a Saudi Arabia–based company delivering reliable
            construction, manpower, and equipment solutions with a strong
            commitment to quality, safety, and professionalism.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            With a focus on precision execution and client satisfaction,
            we support projects across residential, commercial, and
            industrial sectors—ensuring timely delivery and long-lasting
            results.
          </p>

          {/* EXPERIENCE STRIP */}
         <div
  className="flex items-center gap-10 border-t border-gray-200 pt-8"
  data-aos="fade-up"
  data-aos-delay="200"
>
  <div>
    <h3 className="text-4xl font-bold text-green-800">
      <CountUp end={7} suffix="+" />
    </h3>
    <p className="text-sm text-gray-600 mt-1">
      Years of Experience
    </p>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-green-800">
      <CountUp end={50} suffix="+" />
    </h3>
    <p className="text-sm text-gray-600 mt-1">
      Projects Delivered
    </p>
  </div>

  <div>
    <h3 className="text-4xl font-bold text-green-800">
      <CountUp end={100} suffix="%" />
    </h3>
    <p className="text-sm text-gray-600 mt-1">
      Safety Compliance
    </p>
  </div>
</div>
        </div>

      </div>
    </section>
  );
}
