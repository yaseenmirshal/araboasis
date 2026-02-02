"use client";

import { motion } from "framer-motion";

export default function WhatsappFloat() {
  return (
    <motion.a
      href="https://wa.me/+966563544119"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-[#25D366]
        flex items-center justify-center
        shadow-xl
      "
      aria-label="Chat on WhatsApp"
    >
      {/* OFFICIAL WHATSAPP ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M12.04 2C6.52 2 2 6.48 2 12c0 2.1.55 4.07 1.6 5.79L2 22l4.34-1.55A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2zm0 18.2c-1.7 0-3.36-.46-4.8-1.34l-.34-.2-2.58.92.93-2.52-.22-.35a8.13 8.13 0 1 1 7.01 3.49zm4.5-6.05c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.2-.55.08-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.1-.5.12-.12.25-.3.38-.45.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.32-.23.25-.88.87-.88 2.12s.9 2.45 1.02 2.62c.12.17 1.77 2.7 4.3 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.49-.07 1.47-.6 1.68-1.22.21-.6.21-1.12.15-1.22-.06-.1-.23-.16-.48-.28z"/>
      </svg>
    </motion.a>
  );
}
