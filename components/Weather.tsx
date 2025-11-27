"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Weather() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
      const json = await res.json();
      setData(json);
    });
  }, []);

  const icon = data?.iconCode
    ? `/icons/${mapIcon(data.iconCode)}.png`
    : "/weather.png";

  const temp = data?.temp ? `${Math.round(data.temp)}°C` : "--°C";

  const location =
    data?.ward || data?.district || data?.city
      ? [data.ward, data.district, data.city].filter(Boolean).join(", ")
      : "—";

  return (
    <div className="flex items-center gap-1">
      <Image src={icon} width={28} height={28} alt="weather" />
      <div className="leading-tight text-xs">
        <p className="font-semibold text-sm">{temp}</p>
        <p className="text-[11px] text-gray-500 -mt-[2px]">{location}</p>
      </div>
    </div>
  );
}

function mapIcon(code: string) {
  if (code.startsWith("01")) return "sun";
  if (code.startsWith("02") || code.startsWith("03") || code.startsWith("04"))
    return "cloud";
  if (code.startsWith("09") || code.startsWith("10")) return "rain";
  if (code.startsWith("11")) return "storm";
  if (code.startsWith("13")) return "snow";
  if (code.startsWith("50")) return "mist";
  return "cloud";
}
