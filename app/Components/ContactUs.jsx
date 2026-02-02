"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section id="contact" className="py-36 bg-[#f4fdf4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADING */}
        <div className="text-center mb-24" data-aos="fade-up">
          <p className="text-[12px] tracking-[5px] text-green-700 mb-4">
            CONTACT US
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6">
            Let’s Build Something Together
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with Ara Oasis for professional construction, manpower,
            and equipment solutions across Saudi Arabia.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

          {/* LEFT – PREMIUM CONTACT INFO */}
          <div data-aos="fade-right" className="space-y-12">

            {/* Intro */}
            <div>
              
             
              <p className="mt-4 text-gray-600 max-w-md">
                Reach out to Ara Oasis for reliable, high-quality construction
                services delivered with safety, precision, and commitment.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">

              {/* Location */}
              <div
                className="
                  bg-white border border-[#d7f2d7]
                  p-6 shadow-sm hover:shadow-md transition
                "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  OFFICE LOCATION
                </p>
                <p className="text-lg font-medium text-[#1a1a1a]">
                  Kingdom of Saudi Arabia
                </p>
              </div>

              {/* Phone */}
              <div
                className="
                  bg-white border border-[#d7f2d7]
                  p-6 shadow-sm hover:shadow-md transition
                "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  PHONE NUMBER
                </p>
                <p className="text-lg font-medium text-[#1a1a1a]">
                  +966 XX XXX XXXX
                </p>
              </div>

              {/* Email */}
              <div
                className="
                  bg-white border border-[#d7f2d7]
                  p-6 shadow-sm hover:shadow-md transition
                "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <p className="text-xs tracking-widest text-gray-500 mb-2">
                  EMAIL ADDRESS
                </p>
                <p className="text-lg font-medium text-[#1a1a1a]">
                  info@araoasis.com
                </p>
              </div>

            </div>

            {/* Trust Note */}
            <p
              className="text-sm text-gray-600 max-w-md"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our team responds promptly and ensures every inquiry is handled
              with professionalism, transparency, and attention to detail.
            </p>

          </div>

          {/* RIGHT – FORM */}
          <div
            data-aos="fade-right"
            className="
              bg-white border border-[#d7f2d7]
              shadow-xl p-8
            "
          >
            <h3 className="text-xl font-semibold mb-8 text-[#1a1a1a]">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full px-4 py-4 border border-gray-300
                  focus:outline-none focus:border-green-700
                  placeholder:text-gray-400
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full px-4 py-4 border border-gray-300
                  focus:outline-none focus:border-green-700
                  placeholder:text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Phone Number (e.g. +966...)"
                className="
                  w-full px-4 py-4 border border-gray-300
                  focus:outline-none focus:border-green-700
                  placeholder:text-gray-400
                "
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project requirements"
                className="
                  w-full px-4 py-4 border border-gray-300
                  focus:outline-none focus:border-green-700
                  resize-none placeholder:text-gray-400
                "
              ></textarea>

              <button
                type="submit"
                className="
                  w-full bg-green-800 text-white py-4
                  font-semibold tracking-wide
                  hover:bg-green-900 transition
                "
              >
                Submit Inquiry
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
