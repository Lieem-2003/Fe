"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import UserMenu from "./UserMenu";

export default function MobileMenu({ user, close, openAuth }: any) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  const menus = [
    { label: "Địa phương" },
    { label: "Khách sạn" },
    { label: "Vé máy bay" },
    { label: "Sim du lịch quốc tế" },

    {
      label: "Chuyến đi",
      children: ["Tạo lịch trình", "Lịch trình tham khảo"],
    },

    {
      label: "Điểm đến",
      children: [
        "Miền Bắc",
        "Miền Trung",
        "Miền Nam",
        "Tây Bắc Bộ",
        "Đông Bắc Bộ",
      ],
    },

    {
      label: "Xem thêm",
      children: ["Tin tức du lịch", "Sổ tay du lịch", "Video", "Góc ảnh","Khoảnh khắc du lịch","Vé khu vui chơi","VR-360"],
    },
  ];

  return (
    <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 animate-slideDown shadow-lg">
      <div className="flex flex-col gap-4 text-sm font-medium">

        {menus.map((item, i) => (
          <div key={i} className="border-b last:border-none pb-3">
            {/* Main Label */}
            <div
              className="flex justify-between items-center py-2 cursor-pointer"
              onClick={() => {
                if (item.children) toggle(i);
                else close(); // đóng menu nếu là mục thường
              }}
            >
              <span>{item.label}</span>

              {item.children && (
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {/* Children */}
            {open === i && item.children && (
              <div className="pl-4 flex flex-col gap-2 text-gray-600 mt-1">
                {item.children.map((c, idx) => (
                  <button
                    key={idx}
                    className="text-left hover:text-black"
                    onClick={close}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* USER SECTION */}
        <div className="mt-4 pt-4">
          {user ? (
            <UserMenu user={user} mobile />
          ) : (
            <button
              className="w-full bg-primary text-white py-2 rounded-full font-semibold hover:bg-primary/90 transition"
              onClick={() => {
                close();        // đóng menu
                openAuth("login"); // mở modal login
              }}
            >
              Đăng nhập / Đăng ký
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
