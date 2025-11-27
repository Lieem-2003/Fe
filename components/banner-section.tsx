"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const banners = [
  {
    image: "/Games.png",
  },
  {
    image: "/Deal.png",
  },
  {
    image: "/Package.png",
  },
];

export default function BannerSection() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {banners.map((item, idx) => (
          <div
            key={idx}
            className="
              relative 
              rounded-2xl 
              overflow-hidden 
              h-[240px] 
              p-8 
              flex 
              flex-col 
              justify-between 
              bg-cover 
              bg-center
            "
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
          </div>
        ))}
      </div>
    </div>
  );
}
