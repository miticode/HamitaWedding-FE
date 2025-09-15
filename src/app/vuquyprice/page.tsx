"use client";

import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const VuQuyPricePage = () => {
  const posters = [
    {
      src: "/images/vuquy-1.jpg",
      alt: "Bảng giá gói Vu Quy - Basic",
    },
    {
      src: "/images/vuquy-2.jpg",
      alt: "Bảng giá gói Vu Quy - Vip - Luxury",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <div className="pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Motion variants */}
          <MotionHeading />

          {/* Posters grid with motion */}
          <MotionPosterGrid posters={posters} />

          {/* Help text */}
          <p className="mt-6 text-center text-xs sm:text-sm text-gray-500">
            Hamita Wedding - Dịch vụ cưới trọn gói chuyên nghiệp, đẳng cấp
          </p>
        </div>
      </div>
    </main>
  );
};

export default VuQuyPricePage;

// --- Motion subcomponents ---
const MotionHeading: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const container = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  } as const;
  const item = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  } as const;
  const divider = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <motion.div
      className="text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.h1
        variants={item}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
      >
        BẢNG GIÁ GÓI VU QUY
      </motion.h1>
      <motion.p variants={item} className="mt-2 text-sm sm:text-base text-gray-600">
        (1 ngày)
      </motion.p>
      <motion.div
        variants={divider}
        className="mt-6 h-1 w-24 sm:w-32 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full origin-center"
      />
    </motion.div>
  );
};

const MotionPosterGrid: React.FC<{ posters: { src: string; alt: string }[] }> = ({ posters }) => {
  const prefersReducedMotion = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  } as const;
  const card = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  } as const;

  return (
    <motion.div
      className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {posters.map((p, i) => (
        <motion.a
          key={i}
          href={p.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Xem ảnh đầy đủ: ${p.alt}`}
          className="group block"
          variants={card}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
            <div className="relative aspect-[3/4] bg-gray-50">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain p-3 sm:p-4 md:p-6 transition-transform duration-300 group-hover:scale-[1.015]"
                priority={i === 0}
              />
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                className="absolute inset-0 bg-black"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-sm sm:text-base font-medium text-gray-800">{p.alt}</p>
              <span className="text-pink-600 text-sm">Mở ảnh</span>
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};
