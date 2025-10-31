"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Logo/Brand Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2"
        >
          HAMITA WEDDING
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-pink-600 text-sm sm:text-base font-medium"
        >
          Tạo nên khoảnh khắc hoàn hảo
        </motion.p>
      </motion.div>

      {/* Loading Animation */}
      <div className="flex items-center gap-2 mb-8">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-8 h-8 border-3 border-pink-500 border-t-transparent rounded-full"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="text-pink-500 text-xl"
        >
          <FaHeart />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="w-8 h-8 border-3 border-pink-400 border-b-transparent rounded-full"
        />
      </div>

      {/* Loading Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="w-48 sm:w-64 h-1 bg-pink-100 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"
        />
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="mt-6 text-gray-600 text-sm sm:text-base font-medium"
      >
        Đang tải nội dung...
      </motion.p>
    </div>
  );
}

export default Loader;
