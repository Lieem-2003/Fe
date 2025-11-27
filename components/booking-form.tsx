"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function BookingForm() {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  return (
    <section className="relative -mt-20 px-4 pb-12 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          Tự tạo lịch trình
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </p>

        {/* Box nhập địa điểm */}
        <div className="mb-6">
          <div className="flex items-center gap-3 w-full bg-[#F5F5F5] h-[52px] rounded-lg px-4 border border-gray-200">
            <MapPin className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Nhập điểm đến"
              className="bg-transparent w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Grid 4 ô */}
        <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200 rounded-lg overflow-hidden">

          {/* Ngày đi */}
          <div className="flex items-center gap-3 bg-white px-4 py-4 border-r border-gray-200">

            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer">
                  <CalendarIcon className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">
                    {startDate ? format(startDate, "dd MMMM yyyy", { locale: vi }) : "Chọn ngày đi"}
                  </span>
                </div>
              </PopoverTrigger>

              <PopoverContent className="p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

          </div>

          {/* Ngày về */}
          <div className="flex items-center gap-3 bg-white px-4 py-4 border-r border-gray-200">

            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer">
                  <CalendarIcon className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">
                    {endDate ? format(endDate, "dd MMMM yyyy", { locale: vi }) : "Chọn ngày về"}
                  </span>
                </div>
              </PopoverTrigger>

              <PopoverContent className="p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

          </div>

          {/* Số người */}
          <div className="flex items-center gap-3 bg-white px-4 py-4 border-r border-gray-200">
            <Users className="w-5 h-5 text-gray-500" />
            <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
               Số người
            </label>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>

          {/* Nút tạo lịch */}
          <div className="flex items-center justify-center px-4 bg-white">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition">
              Tạo lịch trình
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
