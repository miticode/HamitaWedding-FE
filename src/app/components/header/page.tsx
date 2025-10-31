"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [costOpen, setCostOpen] = useState(false); // desktop dropdown
  const [mobileCostOpen, setMobileCostOpen] = useState(false); // mobile submenu
  const costTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openCost = () => {
    if (costTimer.current) {
      clearTimeout(costTimer.current);
      costTimer.current = null;
    }
    setCostOpen(true);
  };
  const scheduleCloseCost = () => {
    if (costTimer.current) clearTimeout(costTimer.current);
    costTimer.current = setTimeout(() => setCostOpen(false), 150);
  };

  const nav = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "GIỚI THIỆU", href: "/about" },
    { label: "BẢNG GIÁ", href: "/cost" },
    { label: "TRANG PHỤC CƯỚI", href: "#" },
    { label: "ALBUM - CONCEPT", href: "#" },
    { label: "TIN TỨC", href: "/news" },
    { label: "LIÊN HỆ", href: "/contact" },
  ];

  const costMenu = [
    { label: "Gói chụp Album", href: "/albumprice" },
    { label: "Gói Vu Quy", href: "/vuquyprice" },
    { label: "Gói Đính Hôn/Tân Hôn", href: "/dhthprice" },
    { label: "Dịch vụ cưới trọn gói", href: "/cost#goi-tron-goi" },
    { label: "Ngày cưới hỏi", href: "/cost#ngay-cuoi-hoi" },
    { label: "Chụp ảnh cổng", href: "/cost#chup-anh-cong" },
    { label: "MakeUp", href: "/cost#makeup" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    // Consider vuquyprice as part of 'BẢNG GIÁ'
    if (href === "/cost") return pathname?.startsWith("/cost") || pathname?.startsWith("/vuquyprice");
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#FFFDFE] backdrop-blur-md shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 lg:h-24 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/hamitaLogo.jpg"
              alt="Hamita Logo"
              width={120}
              height={40}
              priority
              className="h-7 sm:h-9 lg:h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-gray-700">
            {nav.map((item) => {
              if (item.label === "BẢNG GIÁ") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={openCost}
                    onMouseLeave={scheduleCloseCost}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 relative px-1 py-1 transition-colors ${
                        isActive(item.href)
                          ? "text-gray-900 after:w-full"
                          : "text-gray-700 hover:text-gray-900 after:w-0 hover:after:w-full"
                      } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300`}
                      aria-haspopup="menu"
                      aria-expanded={costOpen}
                    >
                      {item.label}
                      <FiChevronDown
                        className={`mt-0.5 h-4 w-4 transition-transform ${
                          costOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                    {/* Dropdown menu */}
                    <div
                      onMouseEnter={openCost}
                      onMouseLeave={scheduleCloseCost}
                      className={`absolute left-0 top-full mt-2 w-56 rounded-xl bg-white/95 backdrop-blur shadow-lg ring-1 ring-black/5 transition duration-150 ${
                        costOpen
                          ? "opacity-100 visible pointer-events-auto translate-y-0"
                          : "opacity-0 invisible pointer-events-none translate-y-1"
                      }`}
                    >
                      <div className="py-2">
                        {costMenu.map((c) => (
                          <Link
                            key={c.label}
                            href={c.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative px-1 py-1 transition-colors ${
                    isActive(item.href)
                      ? "text-gray-900 after:w-full"
                      : "text-gray-700 hover:text-gray-900 after:w-0 hover:after:w-full"
                  } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            aria-label="Mở/đóng menu"
            aria-expanded={open}
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-out bg-[#FFFDFE]/95 backdrop-blur`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
          <nav className="grid gap-2 font-medium">
            {nav.map((item) => {
              if (item.label === "BẢNG GIÁ") {
                return (
                  <div key={`m-${item.label}`} className="rounded-lg">
                    <div
                      className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                        isActive(item.href)
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setOpen(false);
                          setMobileCostOpen(false);
                        }}
                        className="flex-1"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label="Mở/đóng danh mục Bảng giá"
                        aria-expanded={mobileCostOpen}
                        onClick={() => setMobileCostOpen((v) => !v)}
                        className="ml-2 p-2 rounded-md hover:bg-gray-200 text-gray-700"
                      >
                        <FiChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileCostOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      className={`${
                        mobileCostOpen
                          ? "max-h-96 opacity-100 mt-1"
                          : "max-h-0 opacity-0"
                      } grid overflow-hidden transition-all duration-300 gap-1 pl-2`}
                    >
                      {costMenu.map((c) => (
                        <Link
                          key={`m-sub-${c.label}`}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={`m-${item.label}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 transition-colors ${
                    isActive(item.href)
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
