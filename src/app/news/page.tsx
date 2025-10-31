"use client";
import React, { useState } from 'react';
import { motion, useReducedMotion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaEye, FaTag, FaSearch, FaHeart } from 'react-icons/fa';
import Image from 'next/image';

const News = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  const categories = [
    { id: 'all', name: 'Tất cả', count: 12 },
    { id: 'wedding-tips', name: 'Mẹo cưới', count: 5 },
    { id: 'trending', name: 'Xu hướng', count: 3 },
    { id: 'real-weddings', name: 'Đám cưới thật', count: 4 },
  ];

  const newsData = [
    {
      id: 1,
      title: "Top 10 Xu Hướng Cưới 2025 Bạn Không Thể Bỏ Lỡ",
      excerpt: "Khám phá những xu hướng cưới mới nhất năm 2025 từ trang trí, váy cưới đến phong cách chụp ảnh độc đáo...",
      image: "/images/service1.jpg",
      category: "trending",
      categoryName: "Xu hướng",
      author: "Hamita Team",
      date: "2025-10-30",
      views: 1250,
      featured: true,
    },
    {
      id: 2,
      title: "Bí Quyết Chọn Địa Điểm Chụp Ảnh Cưới Hoàn Hảo",
      excerpt: "Hướng dẫn chi tiết cách lựa chọn địa điểm chụp ảnh cưới phù hợp với phong cách và ngân sách của bạn...",
      image: "/images/service2.jpg",
      category: "wedding-tips",
      categoryName: "Mẹo cưới",
      author: "Minh Anh",
      date: "2025-10-28",
      views: 890,
      featured: false,
    },
    {
      id: 3,
      title: "Đám Cưới Mùa Thu Của Cô Dâu Lan - Chú Rể Nam",
      excerpt: "Câu chuyện tình yêu đẹp và đám cưới lãng mạn trong không gian mùa thu tại phim trường Hamita...",
      image: "/images/service3.jpg",
      category: "real-weddings",
      categoryName: "Đám cưới thật",
      author: "Photographer Team",
      date: "2025-10-25",
      views: 2100,
      featured: true,
    },
    {
      id: 4,
      title: "Cách Phối Hợp Màu Sắc Trang Trí Tiệc Cưới",
      excerpt: "Những gợi ý về cách phối màu trang trí để tạo nên không gian tiệc cưới ấn tượng và hài hòa...",
      image: "/images/service4.jpg",
      category: "wedding-tips",
      categoryName: "Mẹo cưới",
      author: "Decorator Team",
      date: "2025-10-22",
      views: 675,
      featured: false,
    },
    {
      id: 5,
      title: "Album Cưới Concept Vintage - Xu Hướng Hot 2025",
      excerpt: "Tìm hiểu về phong cách vintage đang được yêu thích trong chụp ảnh cưới và cách tạo nên album hoàn hảo...",
      image: "/images/service5.jpg",
      category: "trending",
      categoryName: "Xu hướng",
      author: "Style Team",
      date: "2025-10-20",
      views: 1420,
      featured: false,
    },
    {
      id: 6,
      title: "Lễ Vu Quy Truyền Thống Của Gia Đình Việt",
      excerpt: "Khám phá ý nghĩa và cách tổ chức lễ Vu Quy truyền thống trong đám cưới Việt Nam hiện đại...",
      image: "/images/service6.jpg",
      category: "real-weddings",
      categoryName: "Đám cưới thật",
      author: "Culture Team",
      date: "2025-10-18",
      views: 980,
      featured: false,
    },
  ];

  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsData.filter(news => news.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
            alt="Tin tức Hamita Wedding"
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
                TIN TỨC & BÀI VIẾT
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light drop-shadow-md">
                Khám phá xu hướng và mẹo hay về đám cưới
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Search and Filter Section */}
        <section className="py-8 sm:py-12">
          <motion.div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Search Bar */}
            <motion.div
              variants={itemVariants}
              className="mb-8 max-w-md mx-auto"
            >
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
                />
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Articles */}
        {selectedCategory === 'all' && featuredNews.length > 0 && (
          <section className="pb-12 sm:pb-16">
            <motion.div
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900"
              >
                BÀI VIẾT NỔI BẬT
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredNews.slice(0, 2).map((news, index) => (
                  <motion.article
                    key={news.id}
                    custom={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative overflow-hidden rounded-2xl shadow-xl bg-white"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-pink-500 text-white">
                          <FaHeart className="w-3 h-3" />
                          Nổi bật
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                        <span className="inline-flex items-center gap-1">
                          <FaTag className="w-3 h-3" />
                          {news.categoryName}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <FaCalendarAlt className="w-3 h-3" />
                          {formatDate(news.date)}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                        {news.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaUser className="w-3 h-3" />
                          {news.author}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                          <FaEye className="w-3 h-3" />
                          {news.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* All Articles */}
        <section className="pb-12 sm:pb-16">
          <motion.div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900"
            >
              {selectedCategory === 'all' ? 'TẤT CẢ BÀI VIẾT' : `${categories.find(c => c.id === selectedCategory)?.name.toUpperCase()}`}
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={containerVariants}
            >
              {filteredNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  custom={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-pink-600">
                        <FaTag className="w-2 h-2" />
                        {news.categoryName}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        {formatDate(news.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FaEye className="w-3 h-3" />
                        {news.views.toLocaleString()}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <FaUser className="w-3 h-3" />
                        {news.author}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-pink-600 hover:text-pink-700 font-medium"
                      >
                        Đọc thêm →
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {filteredNews.length === 0 && (
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-lg">
                  Không tìm thấy bài viết nào phù hợp với tìm kiếm của bạn.
                </p>
              </motion.div>
            )}
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default News;