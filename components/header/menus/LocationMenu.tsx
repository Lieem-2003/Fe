import Image from "next/image";

const regions = [
  "Đồng Bằng Sông Hồng",
  "Đồng Bằng Sông Cửu Long",
  "Đông Nam Bộ",
  "Tây Nguyên",
  "Nam Trung Bộ",
  "Bắc Trung Bộ",
  "Đông Bắc Bộ",
  "Tây Bắc Bộ",
];

const featured = [
  { name: "Hà Nội", img: "/dd1.jpg" },
  { name: "TP Hồ Chí Minh", img: "/dd2.jpg" },
  { name: "Hải Phòng", img: "/dd3.jpg" },
  { name: "Thanh Hóa", img: "/dd4.jpg" },
  { name: "Quảng Ninh", img: "/dd5.jpg" },
  { name: "Nam Định", img: "/dd6.jpg" },
  { name: "Thái Bình", img: "/dd7.jpg" },
  { name: "Nghệ An", img: "/dd8.jpg" },
  { name: "Hà Tĩnh", img: "/dd9.jpg" },
  { name: "Huế", img: "/dd10.jpg" },
];

export default function LocationMenu() {
  return (
    <div className="bg-white shadow-xl rounded-xl p-4 flex gap-6 w-[640px]">
      {/* Left */}
      <ul className="w-1/2 space-y-2 text-sm">
        <li className="font-semibold text-primary">Địa điểm nổi bật</li>
        {regions.map((r) => (
          <li key={r} className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
            {r}
          </li>
        ))}
      </ul>

      {/* Right */}
      <div className="grid grid-cols-3 gap-3 w-1/2">
        {featured.map((loc) => (
          <div key={loc.name} className="cursor-pointer group">
            <Image
              src={loc.img}
              alt={loc.name}
              width={100}
              height={80}
              className="rounded-lg object-cover w-full h-[70px] group-hover:opacity-80"
            />
            <p className="text-xs text-center mt-1">{loc.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
