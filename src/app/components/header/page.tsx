"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const Header = () => {
    const router = useRouter();
    const handleClickAbout = () => {
    router.push('/about');
    }
  return (
    <div className='w-full h-28 bg-[#ffff] flex items-center justify-center fixed z-50'>
      <ul className='flex flex-wrap gap-20 justify-center items-center font-semibold'>
        <li>
          <Image 
          
            src="/images/hamitaLogo.jpg" 
            alt='' 
            width={80} 
            height={28} 
          />
        </li>
        <li className='hidden md:block'>TRANG CHỦ</li>
        <li className='hidden md:block' onClick={handleClickAbout}>GIỚI THIỆU</li>
        <li className='hidden md:block'>BẢNG GIÁ</li>
        <li className='hidden md:block'>TRANG PHỤC CƯỚI</li>
        <li className='hidden md:block'>ALBUM - CONCEPT</li>
        <li className='hidden md:block'>TIN TỨC</li>
        <li className='hidden md:block'>LIÊN HỆ</li>
      </ul>
    </div> 
  )
}

export default Header