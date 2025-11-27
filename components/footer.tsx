import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#E5E5E5] py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION: 2 BLOCKS */}
        <div className="flex flex-col md:flex-row gap-12 mb-12">

          {/* BLOCK 1 — CỘT 1 */}
          <div className="md:w-1/3 space-y-4">
            <Image
              src="/logo.svg"
              alt="SmartTravel"
              width={120}
              height={60}
              className="cursor-pointer"
            />

            <div className="text-sm text-gray-300 leading-relaxed">
              <p className="font-semibold text-white">Cơ quan chủ quản:</p>
              <p>
                Công Ty Cổ Phần Đầu Tư và Phát Triển Công Nghệ Truyền Thông Nam Việt.
              </p>

              <p className="font-semibold text-white mt-3">
                Địa chỉ đăng ký kinh doanh:
              </p>
              <p>
                Tầng 6, tháp B, tòa Central Point (Central Field) – Số 219 Trung Kính,
                phường Yên Hòa, quận Cầu Giấy, thành phố Hà Nội.
              </p>
            </div>
          </div>

          {/* BLOCK 2 — 4 CỘT CÒN LẠI */}
          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Cột 1 */}
            <div>
              <h5 className="text-white font-semibold mb-4">Về SmartTravel</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Liên hệ chúng tôi</a></li>
                <li><a href="#" className="hover:text-white">Trợ giúp</a></li>
                <li><a href="#" className="hover:text-white">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-white">Hợp tác cùng chúng tôi</a></li>
              </ul>
            </div>

            {/* Cột 2 */}
            <div>
              <h5 className="text-white font-semibold mb-4">Sản phẩm</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Booking</a></li>
                <li><a href="#" className="hover:text-white">Tự tạo lịch trình</a></li>
                <li><a href="#" className="hover:text-white">Tin tức du lịch</a></li>
                <li><a href="#" className="hover:text-white">Điểm đến du lịch</a></li>
                <li><a href="#" className="hover:text-white">Khoảnh khắc</a></li>
              </ul>
            </div>

            {/* Cột 3 */}
            <div>
              <h5 className="text-white font-semibold mb-4">Chính sách</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Chính sách hoạt động</a></li>
                <li><a href="#" className="hover:text-white">Chính sách riêng tư</a></li>
                <li><a href="#" className="hover:text-white">Nguyên tắc cộng đồng</a></li>
              </ul>
            </div>

            {/* Cột 4 */}
            <div>
              <h5 className="text-white font-semibold mb-4">Chúng tôi trên</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Tiktok</a></li>
                <li><a href="#" className="hover:text-white">Youtube</a></li>
                <li><a href="#" className="hover:text-white">Telegram</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* LINE */}
        <div className="w-full h-px bg-white/10 my-4"></div>

        {/* BOTTOM TEXT */}
        <div className="text-center text-xs text-gray-400 leading-relaxed space-y-1">
          <p>
            MSDN: 0105125302 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 18/01/2011.
          </p>
          <p>Copyright © 2024 SmartTravel. All rights reserved</p>
        </div>

      </div>
    </footer>
  );
}
