"use client";
import React from "react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Construction",
      text: "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
      image: "https://i.pinimg.com/1200x/4e/f0/85/4ef0853b97936f16d4038472f0269a63.jpg",
    },
    {
      id: "02",
      title: "Man Power",
      text: "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
      image: "https://i.pinimg.com/736x/ac/5e/1e/ac5e1eabfa65c7e895ab092b21d819fd.jpg",
    },
    {
      id: "03",
      title: "Equipments",
      text: "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
      image: "https://i.pinimg.com/1200x/a0/a4/1f/a0a41f0df67a0b964a96310c7f206000.jpg",
    },
    {
      id: "04",
      title: "Rental",
      text: "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
      image: "https://i.pinimg.com/1200x/68/5a/b2/685ab2b22bcb64409d36d96b5482562a.jpg",
    },
  ];

  return (
    <section className="w-full py-32 bg-[#f4fdf4]">
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-[12px] tracking-[5px] text-green-700">
          BEST FEATURES
        </p>
        <h2 className="text-5xl font-serif text-[#1a1a1a] mt-3">
          Our Services
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4">
        {services.map((item, i) => (
          <div
            key={i}
            className="relative p-12 border border-[#d7f2d7] bg-white text-black group overflow-hidden transition-all duration-300"
          >
            {/* Hover Background Image */}
            {item.image && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            )}

            {/* Light green overlay */}
            <div className="absolute inset-0 bg-green-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
              <p className="text-4xl mb-6 text-green-700 group-hover:text-green-200">
                {item.id}
              </p>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed mb-6 text-gray-600 group-hover:text-gray-200">
                {item.text}
              </p>

              <button className="text-sm font-semibold text-green-700 group-hover:text-green-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
