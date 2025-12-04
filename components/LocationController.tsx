"use client";

import { useEffect } from "react";
import LocationPrompt from "@/components/LocationPrompt";

export default function LocationController() {

  const getAndSendLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        await fetch("https://sentrip-2.onrender.com/api/location/save", {
          method: "POST",
          headers: { "Content-Type": "application/json","ngrok-skip-browser-warning": "true" },
          body: JSON.stringify({ lat, lon }),
        });

        console.log(":", lat, lon);
      },
      (err) => console.error("Lỗi lấy vị trí:", err),
      { enableHighAccuracy: true }
    );
  };

  useEffect(() => {
    if (!navigator.permissions) return;

    navigator.permissions.query({ name: "geolocation" }).then((status) => {
      // ⚠️ Không gọi getAndSendLocation tự động trên mobile!
    });
  }, []);

  return (
    <LocationPrompt onAllow={getAndSendLocation} />
  );
}
