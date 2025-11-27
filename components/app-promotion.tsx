"use client"

import { Button } from "@/components/ui/button"

export default function AppPromotion() {
  return (
    <section
      className="py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center md:justify-start">
                <img
                  src="/iphone.png?"
                  alt="SmartTravel App"
                  className="max-w-[340px] w-full h-auto object-contain"
                />
          </div>

          {/* Right - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4 text-balance">Tất cả trong một ứng dụng SmartTravel</h2>
            <p className="text-lg opacity-90 mb-8">
              Đặt vé máy bay, khách sạn, tàu & thuê xe ở bất cứ đâu. Nhận cập nhật chuyến bay, thông tin, giảm giá độc
              quyền từ SmartTravel
            </p>

            <div className="flex gap-4">
              <Button
                className="w-[140px] h-[40px] bg-cover bg-center rounded-xl transition-transform hover:scale-105"
                style={{ backgroundImage: "url('/google.png?height=60&width=200')" }}
              >
              </Button>
              <Button
                className="w-[140px] h-[40px] bg-cover bg-center rounded-xl transition-transform hover:scale-105"
                style={{ backgroundImage: "url('/apple.png')" }}
              >
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/30">
              <p className="text-sm opacity-75">Hoặc quét mã QR để tải ứng dụng</p>
              <div className="mt-4 w-20 h-20 bg-white rounded-lg p-1">
                <img src="/qr.jpg?height=80&width=80" alt="QR Code" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
