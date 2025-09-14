"use client";

import Carousel from "@/app/components/carousel/page";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart, FaCamera, FaVideo, FaTshirt } from "react-icons/fa";


const Home = () => {
 
  const services = [
    {
      title: "Váy cưới",
      description: "Dịch vụ chụp ảnh tiệc cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service1.jpg",
      icon: <FaCamera />,
    },
    {
      title: "Áo dài dâu rễ",
      description: "Dịch vụ chụp ảnh tiệc cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service3.jpg",
      icon: <FaCamera />,
    },
    {
      title: "Áo dài bưng quả",
      description: "Dịch vụ thuê váy cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service4.jpg",
      icon: <FaVideo />,
    },
    {
      title: "Vest",
      description: "Dịch vụ thuê váy cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service2.jpg",
      icon: <FaHeart />,
    },
    {
      title: "Ảnh tiệc cưới nhà gái",
      description: "Dịch vụ thuê váy cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service5.jpg",
      icon: <FaHeart />,
    },
    {
      title: "Ảnh tiệc cưới nhà trai",
      description: "Dịch vụ thuê váy cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service6.jpg",
      icon: <FaTshirt />,
    },
     {
      title: "Ảnh Album",
      description: "Dịch vụ thuê váy cưới chuyên nghiệp, đẳng cấp",
      image: "/images/service6.jpg",
      icon: <FaTshirt />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-white to-pink-50"
    >
      <div className="pt-24 sm:pt-28">
        {/* Carousel */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Carousel />
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 sm:mt-10 max-w-4xl px-4 sm:px-6"
        >
          <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl p-6 sm:p-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-gray-900 tracking-tight">
              HAMITA WEDDING HOUSE
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>

            <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                <span className="font-semibold text-pink-600">Hamita Wedding</span>
                <span className="mx-2">-</span>
                <span className="text-gray-700">
                  Đơn vị có hệ sinh thái cưới lớn tại Long An, sở hữu phim trường độc quyền với diện tích 1.200m².
                </span>
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Hamita là nơi sẵn sàng lắng nghe và thấu hiểu câu chuyện của khách hàng, đồng hành để lưu giữ những khoảnh khắc đáng nhớ nhất.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Section */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              BẢNG GIÁ DỊCH VỤ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 focus-within:ring-offset-white bg-white"
                >
                  {/* Image wrapper with fixed aspect ratio for responsiveness */}
                  <div className="relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                  </div>

                  <div className="relative z-20 -mt-24 sm:-mt-28 md:-mt-24 lg:-mt-28 px-4 sm:px-5 md:px-6 pb-5 sm:pb-6">
                    <div className="rounded-xl bg-white/90 backdrop-blur p-4 sm:p-5 shadow-lg">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-pink-500 text-xl sm:text-2xl">
                          {service.icon}
                        </span>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                            {service.title}
                          </h3>
                          <p className="mt-1 text-sm sm:text-base text-gray-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
