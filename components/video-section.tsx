"use client";

import Image from "next/image";
import { Play, Calendar, Eye } from "lucide-react";

const videos = [
  {
    tag: "Đi đâu",
    image: "/vd1.jpg",
    title: "This is title of the travel package that is being featured here.",
    date: "22/09/2022",
    views: "1.098",
  },
  {
    tag: "Ở đâu",
    image: "/vd2.jpg",
    title: "This is title of the travel package that is being featured here.",
    date: "22/09/2022",
    views: "1.098",
  },
  {
    tag: "Ăn gì",
    image: "/vd3.jpg",
    title: "This is title of the travel package that is being featured here.",
    date: "22/09/2022",
    views: "1.098",
  },
  {
    tag: "Chơi gì",
    image: "/vd4.jpg",
    title: "This is title of the travel package that is being featured here.",
    date: "22/09/2022",
    views: "1.098",
  },
  // hàng 2
  {
    tag: "Chơi gì",
    image: "/vd5.jpg",
    title: "This is title of the travel package that is being featured here.",
    date: "22/09/2022",
    views: "1.098",
  },
  {
    tag: "Ăn gì",
    image: "/vd6.jpg",
    title: "This is title of the travel package that is being featured here.",
    date: "22/09/2022",
    views: "1.098",
  },
  {
    tag: "Ở đâu",
    image: "/vd7.jpg",
    title: "This is title of the travel package that is being featured here.",
    date: "22/09/2022",
    views: "1.098",
  },
  {
    tag: "Đi đâu",
    image: "/vd8.jpg",
    title: "This is title of the travel package that is being featured here.",
    date: "22/09/2022",
    views: "1.098",
  },
];

export default function VideoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Video</h2>
        <p className="text-gray-600 mt-2">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {videos.map((v, i) => (
          <div key={i}>
            {/* Thumbnail */}
            <div className="relative rounded-xl overflow-hidden h-[180px] group cursor-pointer">
              <Image
                src={v.image}
                alt="Video"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Tag */}
              <span className="absolute top-3 left-3 bg-white/90 text-gray-900 text-sm px-3 py-1 rounded-lg font-medium">
                {v.tag}
              </span>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-md group-hover:scale-110 transition">
                  <Play size={22} className="text-gray-700" />
                </div>
              </div>
            </div>

            {/* Title */}
            <p className="mt-3 text-gray-800 font-semibold leading-snug">
              {v.title}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-2">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {v.date}
              </div>
              <div className="flex items-center gap-1">
                <Eye size={16} />
                {v.views}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center mt-10">
        <button className="bg-white border border-gray-300 px-6 py-2 rounded-full flex items-center gap-2 shadow-sm hover:bg-gray-100 transition">
          Xem thêm →
        </button>
      </div>

    </section>
  );
}
