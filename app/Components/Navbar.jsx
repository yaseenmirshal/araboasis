"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl 
      z-50 rounded-xl backdrop-blur-lg border transition-all duration-300
      ${isScrolled ? "bg-white/90 border-gray-300 shadow-lg" : "bg-transparent border-transparent shadow-none"}
    `}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">

        {/* LOGO + TEXT */}
        <div className="flex items-center space-x-3">
          <img src="/logo aos.png" alt="Logo" className="h-16 md:w-auto" />
          
          <span className={`text-xl font-bold tracking-wide transition-all duration-300
            ${isScrolled ? "text-black" : "text-white"}
          `}>
            Arab Oasis
          </span>
        </div>

        {/* MOBILE ICONS */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            className={`${isScrolled ? "text-black" : "text-white"} transition`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm transition font-medium group
                ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-200"}
              `}
            >
              {label}
              <span className={`absolute left-0 bottom-0 h-[2px] w-0 group-hover:w-full transition-all duration-300
                ${isScrolled ? "bg-black" : "bg-white"}
              `}></span>
            </Link>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/919946260777"
            target="_blank"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition
              ${isScrolled ? "bg-green-500 text-white hover:bg-green-700" : "bg-white text-black hover:bg-gray-200"}
            `}
          >
            Let's talk
          </a>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden 
          ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          ${isScrolled ? "bg-white/90" : "bg-black/50"}
          backdrop-blur-md w-full rounded-b-xl shadow-md
        `}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium transition
                ${isScrolled ? "text-black" : "text-white"}
              `}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

const menuItems = [
  { href: "#Home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contactus", label: "Contact Us" },
  { href: "#ourteam", label: "Our Team" },
  { href: "#aboutus", label: "About Us" },
];
