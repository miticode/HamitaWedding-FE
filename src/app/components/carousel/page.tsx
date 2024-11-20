'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'animate.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // Trạng thái animation
  const router = useRouter();

  const slides = [
    {
      img: '/images/carousel1.jpg',
      text: 'HAMITA WEDDING',
      text1: 'Lựa chọn tốt nhất của bạn ',
    },
    {
      img: '/images/carousel2.jpg',
      text: 'HAMITA WEDDING',
      text1: 'Vì bạn xứng đáng',
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
      router.push('/donate');
    } else {
      router.push('/adopt');
    }
  };

  return (
    <div className='relative w-full h-[691px] overflow-hidden bg-[#F8F9FA]'>
      <div
        className='flex transition-transform ease-out duration-700'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className='relative w-full h-[691px] flex-shrink-0 bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${slide.img})`, backgroundSize: 'contain' }}
          >
            <div
              className={`absolute bottom-[500px] left-[200px] text-black text-2xl font-semibold ${
                isAnimating ? 'animate__animated animate__fadeInLeft animate__delay-1s animate__duration-3s' : ''
              } sm:bottom-[300px] sm:left-[50px] sm:text-xl`}
            >
              {slide.text}
            </div>
            <div
              className={`absolute bottom-[470px] left-[200px] text-black text-lg font-normal ${
                isAnimating ? 'animate__animated animate__fadeInLeft animate__delay-1s animate__duration-3s' : ''
              } sm:bottom-[270px] sm:left-[50px] sm:text-base`}
            >
              {slide.text1}
            </div>
            <button
              className={`absolute bottom-[400px] left-[200px] text-white text-lg font-normal border border-none rounded-xl px-6 py-2 bg-black hover:bg-pink-400 ${
                isAnimating ? 'animate__animated animate__fadeInLeft animate__delay-1s animate__duration-3s' : ''
              } sm:bottom-[200px] sm:left-[50px] sm:text-base sm:px-4 sm:py-2`}
              onClick={handleReadMore}
            >
              READ MORE
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full sm:left-2'
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full sm:right-2'
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;