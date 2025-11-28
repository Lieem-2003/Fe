"use client";

import { useState } from "react";
import TripMenu from "./menus/TripMenu";
import MoreMenu from "./menus/MoreMenu";
import LocationMenu from "./menus/LocationMenu";

const navItems = [
  { label: "Tour du lịch"},
  { label: "Khách sạn" },
  { label: "Vé máy bay" },
  { label: "Dịch vụ viễn thông", dropdown: <TripMenu /> },
  { label: "Điểm đến", dropdown: <LocationMenu /> },
  { label: "Xem thêm", dropdown: <MoreMenu /> },
];

export default function NavigationMenu() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium relative">
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.dropdown && setActive(item.label)}
          onMouseLeave={() => setActive(null)}
        >
          <button className="hover:text-primary transition flex items-center gap-1">
            {item.label}
            {item.dropdown && <span>▾</span>}
          </button>

          {/* Dropdown */}
          {active === item.label && item.dropdown && (
            <div className="absolute left-0 top-full pt-2 z-40">
              {item.dropdown}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
