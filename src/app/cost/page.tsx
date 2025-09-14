import React from "react";
import Link from "next/link";

type Section = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

const sections: Section[] = [
  {
    id: "album",
    title: "Bảng giá chụp Album",
    description:
      "Các gói chụp album cưới đa dạng concept, địa điểm trong nhà và ngoại cảnh.",
    features: [
      "Tư vấn concept cá nhân hoá",
      "Trang phục cơ bản (theo gói)",
      "Makeup & tóc (theo gói)",
      "Chụp studio/phim trường hoặc ngoại cảnh",
      "Bàn giao file gốc + file chỉnh màu",
    ],
  },
  {
    id: "vu-quy",
    title: "Bảng giá gói Vu Quy",
    description:
      "Ghi hình, chụp hình trọn vẹn nghi thức Vu Quy cùng gia đình hai bên.",
    features: [
      "Chụp ảnh nghi thức & gia đình",
      "Quay video highlight (tuỳ gói)",
      "Chụp ảnh phóng sự",
      "Bàn giao file gốc + chỉnh màu",
    ],
  },
  {
    id: "dinh-hon-tan-hon",
    title: "Bảng giá gói Đính Hôn/Tân Hôn",
    description: "Lưu giữ trọn vẹn khoảnh khắc ngày Đính Hôn hoặc Tân Hôn.",
    features: [
      "Chụp nghi thức & tiệc gia đình",
      "Quay video highlight (tuỳ gói)",
      "Ảnh tập thể, chụp cổng & phông nền",
      "Bàn giao nhanh theo yêu cầu",
    ],
  },
  {
    id: "goi-tron-goi",
    title: "Bảng giá Dịch vụ cưới trọn gói",
    description:
      "Giải pháp trọn gói tối ưu chi phí: trang phục, makeup, chụp, quay, in ấn.",
    features: [
      "Váy cưới/vest (theo gói)",
      "Makeup & làm tóc cô dâu",
      "Chụp ảnh + quay phim",
      "Album/in ảnh khổ lớn (tuỳ gói)",
    ],
  },
  {
    id: "ngay-cuoi-hoi",
    title: "Bảng giá ngày cưới/hỏi",
    description: "Phủ trọn các khung thời gian: rước dâu, lễ gia tiên, tiệc.",
    features: [
      "Chụp ảnh nghi thức",
      "Quay phim phóng sự",
      "Chụp tiệc & khách mời",
      "Bàn giao toàn bộ file",
    ],
  },
  {
    id: "chup-anh-cong",
    title: "Bảng giá chụp ảnh cổng",
    description:
      "Chụp khu vực cổng, phông nền, khu vực đón khách và bàn gallery.",
    features: [
      "Chụp setup cổng & khu vực chính",
      "Chụp cô dâu chú rể và gia đình",
      "Chỉnh màu cơ bản",
      "Bàn giao file nhanh",
    ],
  },
  {
    id: "makeup",
    title: "Bảng giá Makeup",
    description:
      "Dịch vụ trang điểm cô dâu, phụ dâu, mẹ hai bên theo phong cách yêu thích.",
    features: [
      "Trang điểm & làm tóc",
      "Dặm lại trong buổi (tuỳ gói)",
      "Tư vấn phong cách phù hợp concept",
      "Sử dụng mỹ phẩm chính hãng",
    ],
  },
];

const Cost = () => {
  return (
    <div className="pt-24 sm:pt-28 bg-gradient-to-b from-white to-pink-50 min-h-screen">
      {/* Page header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Bảng giá dịch vụ
          </h1>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mt-3 sm:mt-4 mx-auto"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Chọn danh mục bên dưới để xem chi tiết gói dịch vụ phù hợp với bạn
          </p>
        </div>

        {/* Quick nav chips */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {sections.map((s) =>
            s.id === "album" ? (
              <Link
                key={`chip-${s.id}`}
                href="/albumprice"
                className="inline-flex items-center gap-2 rounded-full border border-pink-300 bg-white/70 px-3 py-1.5 text-sm text-pink-700 hover:bg-pink-50 transition"
              >
                {s.title}
              </Link>
            ) : (
              <a
                key={`chip-${s.id}`}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-pink-300 bg-white/70 px-3 py-1.5 text-sm text-pink-700 hover:bg-pink-50 transition"
              >
                {s.title}
              </a>
            )
          )}
        </div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="space-y-8 sm:space-y-10">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <div className="rounded-2xl bg-white/80 backdrop-blur shadow-lg p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    {s.id === "album" ? (
                      <Link
                        href="/albumprice"
                        className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-pink-600 transition-colors"
                      >
                        {s.title}
                      </Link>
                    ) : (
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {s.title}
                      </h2>
                    )}
                    <p className="mt-1 text-gray-600">{s.description}</p>
                  </div>
                  <div>
                    {s.id === "album" ? (
                      <Link
                        href="/albumprice"
                        className="inline-flex items-center rounded-full bg-pink-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-pink-700 transition"
                      >
                        Xem chi tiết
                      </Link>
                    ) : (
                      <a
                        href="#contact"
                        className="inline-flex items-center rounded-full bg-pink-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-pink-700 transition"
                      >
                        Xem chi tiết
                      </a>
                    )}
                  </div>
                </div>

                {/* Feature grid */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {s.features.map((f, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-pink-100 bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-pink-500"></span>
                        <p className="text-gray-700">{f}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <p className="mt-4 text-xs text-gray-500">
                  Lưu ý: Giá có thể thay đổi tuỳ thời điểm và yêu cầu cụ thể.
                  Vui lòng liên hệ để nhận báo giá chi tiết.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cost;
