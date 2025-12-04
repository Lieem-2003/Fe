"use client";

import LocationPrompt from "@/components/LocationPrompt";

export default function LocationController() {

  const getAndSendLocation = () => {
    console.log("📍 BẮT ĐẦU yêu cầu geolocation (mobile cần user click)");

    if (!navigator.geolocation) {
      console.log("❌ Trình duyệt không hỗ trợ geolocation");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        console.log("📍 LẤY ĐƯỢC VỊ TRÍ:", pos);

        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          const res = await fetch("https://sentrip-2.onrender.com/api/location/save", {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ lat, lon }),
          });

          console.log("📡 ĐÃ GỬI LÊN SERVER — RESPONSE:", await res.text());
        } catch (error) {
          console.log("❌ LỖI GỬI API:", error);
        }
      },

      (err) => {
        console.log("❌ LỖI LẤY VỊ TRÍ:", err);
        if (err.code === 1) console.log("➡ User từ chối permission");
        if (err.code === 2) console.log("➡ Không lấy được vị trí");
        if (err.code === 3) console.log("➡ Hết thời gian (timeout)");
      },

      {
        enableHighAccuracy: false,   // tránh block trên mobile
        timeout: 10000,              // 10 giây
        maximumAge: 5000,            // dữ liệu cũ nhất là 5 giây
      }
    );
  };

  return <LocationPrompt onAllow={getAndSendLocation} />;
}
