export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center pt-20"
      style={{
        backgroundImage: "url(/banner.jpg?height=1200&width=1920&query=vietnam-landscape-travel)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to SenTrip</h1>
          <p className="text-lg md:text-xl opacity-90">Khám phá những điểm đến tuyệt vời ở Việt Nam</p>
        </div>
      </div>
    </section>
  )
}
