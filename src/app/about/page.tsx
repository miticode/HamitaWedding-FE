"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBullseye, FaHandsHelping, FaGem, FaUser } from "react-icons/fa";

const About = () => {
  return (
    <div className=" bg-gradient-to-b from-white to-pink-50 min-h-screen">
      {/* Page Hero Header */}
      <section
        aria-label="Ảnh đầu trang Giới thiệu"
        className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh]"
      >
        <Image
          src="/images/wedding.jpg" /* Đặt ảnh được cung cấp vào public/images/about-hero.jpg */
          alt="Không gian tiệc cưới sang trọng"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 text-center">
            <p className="mt-2 sm:mt-3 text-white/90 text-sm sm:text-base md:text-lg">
              Nơi lưu giữ những khoảnh khắc yêu thương trọn vẹn
            </p>
            <nav
              aria-label="Breadcrumb"
              className="mt-3 sm:mt-4 text-white/80 text-xs sm:text-sm"
            >
              <ol className="flex items-center justify-center gap-2 sm:gap-3">
                <li>
                  <Link href="/" className="hover:underline">
                    Trang chủ
                  </Link>
                </li>
                <li className="opacity-70">/</li>
                <li aria-current="page" className="font-semibold">
                  Giới thiệu
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Giới thiệu Hamita Studio
            </h1>
            <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mt-3 sm:mt-4 mb-6"></div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Chào mừng bạn đến với Hamita, nơi những câu chuyện tình yêu được
              kể bằng hình ảnh và những khoảnh khắc quý giá được lưu giữ mãi
              mãi.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
              Chúng tôi tự hào là điểm đến tin cậy của các cặp đôi, mang đến
              những trải nghiệm chụp ảnh cưới và dịch vụ cưới hỏi trọn gói,
              chuyên nghiệp và đẳng cấp.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gt1.jpg"
              alt="Giới thiệu Hamita Studio"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Vision - Mission - Values */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaBullseye className="h-6 w-6" />,
              title: "Tầm nhìn",
              desc: "Trở thành đơn vị dẫn đầu trong lĩnh vực chụp ảnh cưới và dịch vụ cưới trọn gói tại Long An và khu vực lân cận.",
            },
            {
              icon: <FaHandsHelping className="h-6 w-6" />,
              title: "Sứ mệnh",
              desc: "Đồng hành cùng các cặp đôi, kể câu chuyện tình yêu chân thực qua từng khoảnh khắc, mang đến trải nghiệm chuyên nghiệp và tận tâm.",
            },
            {
              icon: <FaGem className="h-6 w-6" />,
              title: "Giá trị cốt lõi",
              desc: "Chất lượng - Sáng tạo - Tin cậy. Mỗi sản phẩm là một tác phẩm được đầu tư kỹ lưỡng.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-3">
                <span className="text-pink-600">{card.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-gray-700 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
          Đội ngũ của chúng tôi
        </h2>
        <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mt-3 mb-8 mx-auto"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "Tùng", role: "Boss", img: "/images/tung.jpg" },
            { name: "Truyền", role: "Boss", img: "/images/truyen.jpg" },
            { name: "Tris", role: "Content Creator", img: "/images/tris.jpg" },
            { name: "Linh", role: "Stylist", img: "/images/service5.jpg" },
          ].map((m, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/80 backdrop-blur p-4 shadow hover:shadow-lg transition-shadow text-center"
            >
              <div className="mx-auto mb-3 h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden ring-2 ring-pink-200">
                <div className="relative h-full w-full">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority={i < 2}
                  />
                </div>
              </div>
              <div className="font-semibold text-gray-900">{m.name}</div>
              <div className="text-sm text-gray-600">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
