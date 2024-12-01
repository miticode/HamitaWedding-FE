"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "animate.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // Trạng thái animation
  const router = useRouter();

  const slides = [
    {
      img: "/images/carousel1.jpg",
    },

    {
      img: "/images/carousel2.jpg",
    },
  ];

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setIsAnimating(false); // Ngừng animation trước khi thay đổi slide
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setIsAnimating(false); // Ngừng animation trước khi thay đổi slide
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Kích hoạt lại animation mỗi khi slide thay đổi
    setIsAnimating(true);

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleReadMore = () => {
    if (currentIndex === 2) {
      router.push("/donate");
    } else {
      router.push("/adopt");
    }
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-[800px] flex-shrink-0 bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg sm:left-2"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg sm:right-2"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
