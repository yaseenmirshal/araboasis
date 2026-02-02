"use client";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1F2029]  text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

        {/* CONTACT US */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>

          <div className="space-y-8 text-gray-300">

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-white" />
              <div>
                <p className="text-sm font-semibold text-white">Office Address</p>
                <p className="text-sm">Jeddah</p>
                <p className="text-sm">Saudi Arabia</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-white" />
              <div>
                <p className="text-sm font-semibold text-white">Email Us</p>
                <p className="text-sm">info@araboasis-const.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-white" />
              <div>
                <p className="text-sm font-semibold text-white">Call Us</p>
                <p className="text-sm">+966 56 354 4119</p>
              </div>
            </div>

          </div>
        </div>

        {/* RECENT NEWS */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Recent News</h2>

          <div className="space-y-10">

            {/* News Item */}
            {[1, 2].map((n) => (
              <div key={n} className="flex gap-5">
                <div className="w-28 h-20 relative">
                  <img
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                    fill
                    className="object-cover rounded"
                    alt="news"
                  />
                </div>

                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-white leading-snug">
                    The Start–Up Ultimate Guide to Making Your WordPress Journal.
                  </p>
                  <p className="mt-1 text-xs text-gray-400">14 Jan 2022</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* LOGO + SOCIAL + SUBSCRIBE */}
        <div>

          {/* Logo */}
          <h2 className="text-3xl font-bold mb-6 tracking-wide">ARAB OASIS</h2>

          {/* Social Icons */}
          <div className="flex gap-6 mb-10">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#D1A875] transition"
              >
                <Icon className="w-5 h-5 text-gray-300" />
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm tracking-wide leading-relaxed">
            © 2025,RanzomTech. MADE WITH PASSION
            <span className="ml-1 text-green-500">RANZOM.</span>
          </p>

          {/* Newsletter */}
          <div className="mt-10 relative">
            <input
              type="email"
              placeholder="Type Your Email"
              className="w-full py-4 px-4 bg-[#2A2B35] rounded-full text-gray-300 text-sm outline-none"
            />

            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-green-500 text-black rounded-full flex items-center justify-center">
              ➤
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
