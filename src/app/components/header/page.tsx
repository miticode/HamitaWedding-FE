"use client"
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation';
import React from 'react'

const Header = () => {
    const router = useRouter();
    const currentRoute = usePathname();

    const handleClickAbout = () => {
        router.push('/about');
    }
    const handleClickHome = () => {
        router.push('/');
    }
    const handleClickCost = () => {
      router.push('/cost');
  }
    return (
        <div className='w-full h-28 bg-[#ffff] flex items-center justify-center fixed z-50 shadow-lg'>
            <ul className='flex flex-wrap gap-20 justify-center items-center font-semibold text-gray-800'>
                <li>
                    <Image 
                        src="/images/hamitaLogo.jpg" 
                        alt='Hamita Logo' 
                        width={80} 
                        height={28} 
                        className='transition-transform duration-300 hover:scale-110'
                    />
                </li>
                <li 
                    className={`hidden md:block transition-colors duration-300 cursor-pointer ${currentRoute === '/' ? 'underline-custom' : 'hover-underline'}`} 
                    onClick={handleClickHome}
                >
                    TRANG CHỦ
                </li>
                <li 
                    className={`hidden md:block transition-colors duration-300 cursor-pointer ${currentRoute === '/about' ? 'underline-custom' : 'hover-underline'}`} 
                    onClick={handleClickAbout}
                >
                    GIỚI THIỆU
                </li>
                <li   className={`hidden md:block transition-colors duration-300 cursor-pointer ${currentRoute === '/cost' ? 'underline-custom' : 'hover-underline'}`} 
                    onClick={handleClickCost}>BẢNG GIÁ</li>
                <li className='hidden md:block transition-colors duration-300 hover-underline cursor-pointer'>TRANG PHỤC CƯỚI</li>
                <li className='hidden md:block transition-colors duration-300 hover-underline cursor-pointer'>ALBUM - CONCEPT</li>
                <li className='hidden md:block transition-colors duration-300 hover-underline cursor-pointer'>TIN TỨC</li>
                <li className='hidden md:block transition-colors duration-300 hover-underline cursor-pointer'>LIÊN HỆ</li>
            </ul>
            <style jsx>{`
                .underline-custom {
                    position: relative;
                }
                .underline-custom::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -2px; 
                    height: 2px; 
                    background-color: black;
                }
                .hover-underline {
                    position: relative;
                }
                .hover-underline::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -2px; 
                    height: 2px; 
                    background-color: transparent;
                    transition: background-color 0.3s;
                }
                .hover-underline:hover::after {
                    background-color: black;
                }
            `}</style>
        </div> 
    )
}

export default Header