"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  // Autoplay duration in ms (kept consistent with progress bar)
  const AUTOPLAY_MS = 5000;
  const SWIPE_THRESHOLD = 60; // px

  const slides = [
    {
      img: "/images/carousel1.jpg",
      title: "Wedding Dreams",
      subtitle: "Create your perfect moment",
      // href: "/about" // Optional: uncomment and set to enable click-through
    },
    {
      img: "/images/carousel2.jpg",
      title: "Magical Memories",
      subtitle: "Capture every special detail",
      // href: "/cost"
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, AUTOPLAY_MS);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const slideVariants = {
    enter: {
      x: "100%",
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: "-100%",
      opacity: 0
    }
  };

  // Overlay staggered animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, when: "beforeChildren" }
    }
  } as const;

  const overlayItem = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
  } as const;

  // Touch swipe handlers
  let touchStartX = 0;
  let touchStartY = 0;
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 0.7) {
      if (dx < 0) nextSlide();
      else prevSlide();
    }
  };

  // Keyboard navigation and click-through
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "Enter" || e.key === " ") {
      const href = (slides[currentIndex] as any).href as string | undefined;
      if (href) {
        e.preventDefault();
        router.push(href);
      }
    }
  };

  const handleSlideClick = () => {
    const href = (slides[currentIndex] as any).href as string | undefined;
    if (href) router.push(href);
  };

  return (
    <div 
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] min-h-[320px] overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Bộ sưu tập ảnh cưới"
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-white/30">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
          key={currentIndex}
        />
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          onClick={handleSlideClick}
          role={(slides[currentIndex] as any).href ? "link" : undefined}
          aria-label={(slides[currentIndex] as any).href ? `Mở ${slides[currentIndex].title}` : undefined}
          className={`absolute w-full h-full ${(slides[currentIndex] as any).href ? 'cursor-pointer' : ''}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[currentIndex].img}
              alt={`Slide ${currentIndex + 1}`}
              fill
              sizes="100vw"
              priority
              className="object-cover brightness-75"
            />
            
            {/* Content Overlay */}
            <motion.div
              key={`overlay-${currentIndex}`}
              variants={overlayVariants}
              initial="hidden"
              animate="show"
              className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white px-4"
            >
              <motion.h2
                variants={overlayItem}
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-center drop-shadow-lg"
              >
                {slides[currentIndex].title}
              </motion.h2>
              <motion.p
                variants={overlayItem}
                className="text-base sm:text-lg md:text-xl text-center max-w-2xl"
              >
                {slides[currentIndex].subtitle}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-3 sm:p-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          aria-label="Slide trước"
          className="bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <FiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          aria-label="Slide tiếp theo"
          className="bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <FiChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Chuyển đến slide ${index + 1}`}
            aria-pressed={currentIndex === index}
            className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
              currentIndex === index ? 'bg-white w-6 sm:w-8' : 'bg-white/50 w-2.5 sm:w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
