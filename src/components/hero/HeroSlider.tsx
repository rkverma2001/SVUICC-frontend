"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const banners = ["/banners/1.png", "/banners/2.png", "/banners/3.png", "/banners/4.png",];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden shadow-lg">
      <motion.img
        key={current}
        src={banners[current]}
        alt={`Banner ${current + 1}`}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full object-cover"
      />

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
