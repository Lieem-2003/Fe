import { ArrowRight } from "lucide-react"

const tips = [
  {
    id: 1,
    category: "Chơi gì",
    title: 'Checkin top 12 quán café "overnight" dành cho tín đồ cú đêm tại Hà Nội',
    date: "30/07/2025",
    image: "/tt1.jpg",
  },
  {
    id: 2,
    category: "Ăn gì",
    title: "Hé cửa một chiếc bụng dôi – và cả một gia đình ăn no đêm hôm",
    date: "10/07/2025",
    image: "/tt2.jpg",
  },
  {
    id: 3,
    category: "Chơi gì",
    title: "Hẻ sông hẻ mình cùng bạn sắc Việt – Cùng nau gút ủ Năng lượng truyền thống",
    date: "09/07/2025",
    image: "/tt3.jpg",
  },
  {
    id: 4,
    category: "Chơi gì",
    title: "Hành trình hè 2025 - Hành trình kết nối yêu thương, xích lại gần hơn",
    date: "03/07/2025",
    image: "/tt4.jpg",
  },
  {
    id: 5,
    category: "Ăn gì",
    title: "Combo hè định nhật: Điểm đến chất - Ảnh xịn - Trải nghiệm cực chảy",
    date: "03/07/2025",
    image: "/tt5.jpg",
  },
  {
    id: 6,
    category: "Chơi gì",
    title: "Từ truyền cổ tích bước ra – Những điểm đến thức nôi con sông cung huyền thoại Việt",
    date: "09/07/2025",
    image: "/tt6.jpg",
  },
]

export default function TravelTipsSection() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-foreground text-center">Tin tức du lịch</h2>
        <p className="text-gray-600 mb-12 text-center">Tin tức nổi bật về du lịch từ mọi miền đất nước</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={tip.image || "/placeholder.svg"}
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary">
                  {tip.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-foreground mb-3 line-clamp-2 group-hover:text-primary transition">
                  {tip.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{tip.date}</span>
                  <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="text-primary font-semibold hover:underline flex items-center gap-2">
            Xem Thêm <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
