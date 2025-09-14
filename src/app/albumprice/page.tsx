"use client";
import Image from "next/image";
import React from "react";
type Row = { place: string; price: string };

const rows: Row[] = [
  { place: "Phim trường Hamita", price: "5.500.000 VND" },
  { place: "Phim trường Sài Gòn", price: "7.500.000 VND" },
  { place: "Vũ Garden", price: "8.500.000 VND" },
  { place: "Vũng Tàu", price: "13.000.000 VND" },
  { place: "Phan Thiết", price: "14.000.000 VND" },
  { place: "Vĩnh Hy", price: "15.000.000 VND" },
  { place: "Đà Lạt", price: "14.000.000 VND" },
  { place: "Nha Trang - 02 ngày", price: "17.000.000 VND" },
  { place: "Đà Nẵng - 02 ngày", price: "22.000.000 VND" },
  { place: "Phú Quốc - 02 ngày", price: "23.000.000 VND" },
];

const shootDayItems = [
  "02 váy cưới",
  "02 veston",
  "01 trang phục tự do",
  "Make-up & làm tóc theo trang phục",
  "Hoa cô dâu + phụ kiện đi kèm",
];

const productItems = [
  "Album cao cấp Hàn Quốc 30x30 hoặc 25x35, 30 trang (35 hình)",
  "04 ảnh 13x18 ép gỗ khung",
  "01 ảnh lớn 60x90",
  "Giao file thiết kế gốc và file chỉnh sửa",
];

export default function AlbumPricePage() {
  return (
    <div className="bg-gradient-to-b from-white to-pink-50 min-h-screen">
      {/* Hero */}
      <section aria-label="Album Hero" className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh]">
        <Image
          src="/images/carousel1.jpg"
          alt="Album cưới"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
            Bảng giá chụp Album
          </h1>
        </div>
      </section>

      {/* Pricing (mobile cards + desktop table) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Mobile: cards */}
        <div className="md:hidden space-y-4">
          <div className="rounded-2xl bg-white/80 backdrop-blur shadow-lg p-4">
            <h2 className="text-lg font-semibold text-gray-900">Vị trí & Giá</h2>
            <div className="mt-3 space-y-3">
              {rows.map((r) => (
                <div key={r.place} className="flex items-center justify-between rounded-xl border border-pink-100 bg-white p-3">
                  <span className="text-gray-900 font-medium mr-3">{r.place}</span>
                  <span className="text-pink-700 font-semibold whitespace-nowrap">{r.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur shadow-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900">Ngày chụp</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
              {shootDayItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur shadow-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900">Sản phẩm</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-700">
              {productItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop: table */}
        <div className="hidden md:block rounded-2xl bg-white/80 backdrop-blur shadow-lg p-4 sm:p-6">
          <div className="overflow-x-auto">
            <table className="min-w-[1000px] w-full border-collapse">
              <caption className="sr-only">Bảng giá chụp album cưới</caption>
              <thead>
                <tr className="text-left text-gray-700">
                  <th className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-pink-100 px-4 py-3 w-1/4">Vị trí</th>
                  <th className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-pink-100 px-4 py-3 w-1/6">Giá</th>
                  <th className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-pink-100 px-4 py-3 w-1/4">Ngày chụp</th>
                  <th className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-pink-100 px-4 py-3">Sản phẩm</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr key={r.place} className="align-top odd:bg-white even:bg-pink-50/40">
                    <td className="border-b border-pink-50 px-4 py-3 text-gray-900 font-medium">
                      {r.place}
                    </td>
                    <td className="border-b border-pink-50 px-4 py-3 text-pink-700 font-semibold whitespace-nowrap">
                      {r.price}
                    </td>
                    {idx === 0 && (
                      <td
                        className="border-b border-pink-50 px-4 py-3 text-gray-700"
                        rowSpan={rows.length}
                      >
                        <ul className="list-disc pl-5 space-y-1">
                          {shootDayItems.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </td>
                    )}
                    {idx === 0 && (
                      <td
                        className="border-b border-pink-50 px-4 py-3 text-gray-700"
                        rowSpan={rows.length}
                      >
                        <ul className="list-disc pl-5 space-y-1">
                          {productItems.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes + CTA (shared) */}
        <div className="mt-6 rounded-2xl bg-white/80 backdrop-blur shadow-lg p-4 sm:p-6">
          <div className="space-y-3 text-gray-700">
            <div>
              <span className="font-semibold">Lưu ý:</span> Ngoại cảnh Nha Trang, Đà Nẵng, Phú Quốc chưa bao gồm phí di lại, ăn uống, khách sạn cho ekip 3 người và phí địa điểm chụp nếu có.
            </div>
            <ul className="list-disc pl-5 text-sm">
              <li>Photobook 20x30 (20 trang): 1.500.000 — thêm 2 trang: 150.000</li>
              <li>Photobook 25x35 (30 trang): 2.000.000 — thêm 2 trang: 200.000</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-pink-600 px-5 py-2 text-white text-sm font-semibold shadow hover:bg-pink-700 transition"
            >
              Liên hệ báo giá chi tiết
            </a>
            <span className="text-xs text-gray-500">Bảng giá có thể thay đổi theo thời điểm và yêu cầu chụp thực tế.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
