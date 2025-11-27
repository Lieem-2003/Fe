"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CARD */}
        <div className="bg-white shadow-md rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[320px]">
          
          {/* Avatars */}
          <div className="flex items-center -space-x-4">
            <Image
              src="/avt1.png"
              alt="avatar1"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/avt2.png"
              alt="avatar2"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/avt3.png"
              alt="avatar3"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />

            {/* PLUS BUTTON */}
            <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center text-lg font-bold border-2 border-white">
              +
            </div>
          </div>

          {/* TEXT */}
          <div className="text-sm font-medium text-gray-700">
            <span className="font-bold">1000+ </span>
            người đã sử dụng tính năng tự tạo lịch trình.
          </div>
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Ngoài kia là một thế giới rộng lớn, hãy khám phá
          </h2>

          <p className="mt-2 text-gray-600">
            Bạn chỉ cần rời đi và đến nơi bạn thích,{" "}
            <span className="text-blue-500 font-semibold">SmartTravel</span>{" "}
            tạo lịch trình và sắp xếp mọi ý tưởng du lịch của bạn.
          </p>
        </div>

        {/* BUTTON */}
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:opacity-90 transition">
          Trải nghiệm <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
}
