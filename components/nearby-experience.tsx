"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Heart } from "lucide-react";
import { useState } from "react";

const filters = ["Đi đâu", "Ở đâu", "Ăn gì", "Chơi gì"];

const places = [
  {
    title: "Văn Miếu Quốc Tử Giám",
    location: "40 Nhà Chung, Hàng Trống, Hà Nội",
    image: "/d1.jpg",
    rating: "10 Tuyệt vời",
    open: true,
  },
  {
    title: "Lăng Chủ Tịch Hồ Chí Minh",
    location: "Hùng Vương, Điện Biên, Hà Nội",
    image: "/d2.jpg",
    rating: "10 Tuyệt vời",
    open: true,
  },
  {
    title: "Hồ Hoàn Kiếm",
    location: "Hàng Trống, Hoàn Kiếm, Hà Nội",
    image: "/d3.jpg",
    rating: "10 Tuyệt vời",
    open: true,
  },
  {
    title: "Cầu Long Biên",
    location: "Hàng Trống, Hà Nội",
    image: "/d4.jpg",
    rating: "10 Tuyệt vời",
    open: true,
  },
];

export default function NearbyExperience() {
  const [activeFilter, setActiveFilter] = useState("Đi đâu");

  return (
    <section className="relative w-full py-20 bg-[#F1F8FF] overflow-hidden">

      {/* Background Cloud + Plane */}
      <Image
        src="/g24.png"
        alt="plane"
        width={300}
        height={300}
        className="absolute left-0 top-10 opacity-60"
      />

      <Image
        src="/g23.png"
        alt="plane"
        width={300}
        height={300}
        className="absolute right-0 top-10 opacity-60"
      />

      {/* Title Section */}
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-3xl font-bold text-gray-900">Top trải nghiệm gần bạn</h2>
        <p className="text-gray-600 mt-2">
          Cho phép theo dõi vị trí để có trải nghiệm tốt hơn
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-10 relative z-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`
              px-5 py-2 rounded-full font-medium 
              transition border
              ${
                activeFilter === f
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto px-4">

        {/* Arrow Left */}
        <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20">
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Arrow Right */}
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-20">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {places.map((place, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={place.image}
                  alt={place.title}
                  width={400}
                  height={250}
                  className="w-full h-[180px] object-cover"
                />

                <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Hà Nội
                </span>

                <button className="absolute top-3 right-3 bg-white p-1 rounded-full shadow-sm">
                  <Heart size={18} className="text-gray-700" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{place.title}</h3>

                <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
                  <MapPin size={16} />
                  <span>{place.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm mt-3">
                  <span className="text-blue-600 font-semibold">{place.rating}</span>
                  <span className="text-green-600 font-medium">
                    {place.open ? "● Mở cửa" : "● Đóng cửa"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-white border border-gray-200 rounded-full flex items-center gap-2 shadow-sm hover:bg-gray-100">
            Xem thêm →
          </button>
        </div>
      </div>

    </section>
  );
}
