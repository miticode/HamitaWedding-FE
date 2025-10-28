"use client";
import React from 'react';
import { motion, useReducedMotion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : i * 0.04,
      },
    }),
  } as const;

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Điện thoại",
      details: ["0982 341 989", "0938 686 559"],
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["hamitaweddinghouse@gmail.co", "booking@hamitawedding.com"],
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Địa chỉ",
      details: [
        "123 Đường Cây Thông, Phường Hiệp Ninh",
        "Thành phố Tây Ninh, Tỉnh Tây Ninh"
      ],
    },
    {
      icon: <FaClock />,
      title: "Giờ làm việc",
      details: ["Thứ 2 - Chủ nhật: 8:00 - 20:00", "Tư vấn 24/7 qua hotline"],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", href: "#", color: "text-blue-600" },
    { icon: <FaInstagram />, name: "Instagram", href: "#", color: "text-pink-600" },
    { icon: <FaYoutube />, name: "YouTube", href: "#", color: "text-red-600" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-pink-50"
    >
      <div className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <motion.section
          className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Image
            src="/images/contact.jpg"
            alt="Liên hệ Hamita Wedding"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              variants={itemVariants}
              className="text-center text-white px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md mb-4">
                LIÊN HỆ VỚI CHÚNG TÔI
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light drop-shadow-md">
                Để được tư vấn miễn phí về dịch vụ cưới
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <section className="py-12 sm:py-16">
          <motion.div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
            >
              THÔNG TIN LIÊN HỆ
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12"
              variants={containerVariants}
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="mt-1 text-pink-500 text-2xl sm:text-3xl"
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <div className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm sm:text-base text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 mb-12 overflow-hidden"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  VỊ TRÍ CỦA CHÚNG TÔI
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Hamita Wedding House - Tây Ninh
                </p>
              </div>
              
              <div className="relative w-full">
                {/* Map container with proper aspect ratio */}
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.804160937781!2d106.47367517600361!3d10.437109765358812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ab39117b32b6b%3A0xc73f3ea590e38789!2sHamita%20Wedding%20House!5e0!3m2!1svi!2s!4v1732119731954!5m2!1svi!2s"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vị trí Hamita Wedding House"
                  />
                </div>
                
                {/* Map overlay with address info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-4 p-4 bg-gradient-to-r from-pink-50 to-white rounded-lg border border-pink-100"
                >
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-pink-500 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">
                        Hamita Wedding House
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-1">
                        123 Đường Cây Thông, Phường Hiệp Ninh, Thành phố Tây Ninh, Tỉnh Tây Ninh
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open('https://goo.gl/maps/your-map-link', '_blank')}
                        className="mt-2 text-pink-600 hover:text-pink-700 text-xs sm:text-sm font-medium underline underline-offset-2"
                      >
                        Xem chỉ đường →
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                THEO DÕI CHÚNG TÔI
              </h3>
              <div className="flex justify-center gap-4 sm:gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`${social.color} bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow`}
                    aria-label={`Theo dõi trên ${social.name}`}
                  >
                    <span className="text-2xl sm:text-3xl">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                SẴN SÀNG TẠO NÊN NGÀY CƯỚI HOÀN HẢO?
              </h3>
              <p className="text-sm sm:text-base mb-6 opacity-90">
                Liên hệ ngay với chúng tôi để được tư vấn miễn phí về các gói dịch vụ cưới
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-shadow"
              >
                GỌI NGAY: 0982 341 989
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;