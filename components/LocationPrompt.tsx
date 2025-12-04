"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LocationPromptProps {
  onAllow: () => void | Promise<void>;
}

export default function LocationPrompt({ onAllow }: LocationPromptProps) {
  const [open, setOpen] = useState(true); 
  // 👉 Luôn mở khi load trang (không cần check localStorage)

  const handleAllow = async () => {
    console.log("📍 BẮT ĐẦU lấy vị trí...");

    if (!navigator.geolocation) {
      console.log("❌ Trình duyệt không hỗ trợ geolocation");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        console.log("📍 VỊ TRÍ LẤY ĐƯỢC:", pos);

        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          const res = await fetch("https://sentrip-2.onrender.com/api/location/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lat, lon }),
          });

          console.log("📡 SERVER TRẢ VỀ:", await res.text());
        } catch (error) {
          console.log("❌ LỖI GỬI API:", error);
        }

        setOpen(false); // đóng form sau khi gửi xong
      },

      (err) => {
        console.log("❌ LỖI LẤY VỊ TRÍ:", err);

        if (err.code === 1) console.log("➡ User từ chối permission");
        if (err.code === 2) console.log("➡ Không lấy được vị trí");
        if (err.code === 3) console.log("➡ Hết thời gian (timeout)");
      },

      {
        enableHighAccuracy: false,
      }
    );
  };

  const handleDeny = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />

      <DialogContent className="max-w-sm rounded-xl p-6 z-[60]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Cho phép truy cập vị trí?
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-gray-600 mt-3">
          SenTrip cần quyền truy cập vị trí để hiển thị thời tiết và gợi ý điểm đến gần bạn.
        </p>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={handleDeny}>Từ chối</Button>
          <Button onClick={handleAllow} className="bg-pink-500 hover:bg-pink-600">
            Cho phép
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
