import { MapPin } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Hà Nội",
    image: "/hanoi.jpg",
    stats: { places: 5, stay: 3, price: 2, activity: 4 },
  },
  {
    id: 2,
    name: "Đà Nẵng",
    image: "/danang.jpg",
    stats: { places: 5, stay: 3, price: 2, activity: 4 },
  },
  {
    id: 3,
    name: "TP. Hồ Chí Minh",
    image: "/hcm.jpg",
    stats: { places: 5, stay: 3, price: 2, activity: 4 },
  },
  {
    id: 4,
    name: "Hải Phòng",
    image: "/haiphong.jpg",
    stats: { places: 5, stay: 3, price: 2, activity: 4 },
  },
  {
    id: 5,
    name: "Hà Giang",
    image: "/hagiang.jpg",
    stats: { places: 5, stay: 3, price: 2, activity: 4 },
  },
  {
    id: 6,
    name: "Vũng Tàu",
    image: "/vungtau.jpg",
    stats: { places: 5, stay: 3, price: 2, activity: 4 },
  },
]

export default function DestinationsGrid() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-foreground text-center">Top điểm đến yêu thích</h2>
        <p className="text-gray-600 mb-12 text-center">Những địa điểm được yêu thích nhất của các du khách</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="w-[366.6px] h-[122px] bg-[#F5F5F5] rounded-[8px] p-4 gap-4 flex items-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex items-start gap-4 p-4">
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-foreground mb-2">{dest.name}</h3>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} /> Địa điểm • {dest.stats.places} địa điểm
                    </div>
                    <div>Ở lại • {dest.stats.stay} nơi</div>
                    <div>Ăn gì • {dest.stats.price} chỗ</div>
                    <div>Chơi gì • {dest.stats.activity} hoạt động</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
