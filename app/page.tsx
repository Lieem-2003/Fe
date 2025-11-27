import Header from "@/components/header/header"
import HeroSection from "@/components/hero-section"
import BookingForm from "@/components/booking-form"
import DestinationsGrid from "@/components/destinations-grid"
import BannerSection from "@/components/banner-section"
import ExperienceSection from "@/components/experience-section"
import TravelTipsSection from "@/components/travel-tips-section"
import NearbyExperiences from "@/components/nearby-experience"
import VideoSection from "@/components/video-section"
import AppPromotion from "@/components/app-promotion"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BookingForm />
      <DestinationsGrid />
      <BannerSection />
      <ExperienceSection />
      <TravelTipsSection />
      <NearbyExperiences />
      <VideoSection />
      <AppPromotion />
      <Footer />
    </main>
  )
}
