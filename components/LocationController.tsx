"use client";

import { useEffect } from "react";
import LocationPrompt from "@/components/LocationPrompt";

export default function LocationController() {

  const getAndSendLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        await fetch("https://brevicaudate-marquerite-realisingly.ngrok-free.dev/api/location/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lat, lon }),
        });

        console.log("Đã gửi vị trí:", lat, lon);
      },
      (err) => console.error("Lỗi lấy vị trí:", err),
      { enableHighAccuracy: true }
    );
  };

  useEffect(() => {
    if (!navigator.permissions) return;

    navigator.permissions
      .query({ name: "geolocation" as PermissionName })
      .then((status) => {
        if (status.state === "granted") {
          // 👉 user đã cho phép từ trước → tự động lấy tọa độ
          getAndSendLocation();
        }
      });
  }, []);

  return (
    <LocationPrompt onAllow={getAndSendLocation} />
  );
}
