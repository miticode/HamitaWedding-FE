"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaClock, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-[#181818] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">THÔNG TIN LIÊN HỆ</h2>
          <ul>
            <li className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>377- Thị Trấn Tầm Vu, H.Châu Thành, Tỉnh Long An</span>
            </li>
            <li className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" />
              <span>0982341989</span>
            </li>
            <li className="mb-2 flex items-center">
              <FaEnvelope className="mr-2" />
              <span>hamitaweddinghouse@gmail.com</span>
            </li>
            <li className="mb-2 flex items-center">
              <FaGlobe className="mr-2" />
              <span>hamitawedding.com</span>
            </li>
            <li className="mb-2 flex items-center">
              <FaClock className="mr-2" />
              <span>8AM-9PM</span>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">THÔNG TIN THÊM</h2>
          <ul>
            <li className="mb-2">Giới Thiệu</li>
            <li className="mb-2">Liên Hệ</li>
            <li className="mb-2">Đội ngũ chuyên gia</li>
            <li className="mb-2">Chính sách bảo mật</li>
            <li className="mb-2">Chính sách thanh toán</li>
            <li className="mb-2">Chính sách bảo hành và đổi trả</li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">CHỈ ĐƯỜNG</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.804160937781!2d106.47367517600361!3d10.437109765358812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ab39117b32b6b%3A0xc73f3ea590e38789!2sHamita%20Wedding%20House!5e0!3m2!1svi!2s!4v1732119731954!5m2!1svi!2s"
            width={300}
            height={200}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">FANPAGE</h2>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhamitaweddinghouse&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width={300}
            height={200}
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="rounded-xl"
          />
        </div>
      </div>
      <hr className="my-8 border-gray-600" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-center md:text-left mb-4 md:mb-0">Copyright by Hamita Group 2024</p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/hamitaweddinghouse" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-gray-400" size={24} />
          </a>
          <a href="https://www.instagram.com/hamitaweddinghouse" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-400" size={24} />
          </a>
          <a href="https://www.youtube.com/@hamitawedding" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white hover:text-gray-400" size={24} />
          </a>
          <a href="https://www.tiktok.com/@hamitawedding" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-white hover:text-gray-400" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;