import type React from "react"
// ... existing code ...
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toast/toaster"
import { AuthProvider } from "@/components/contexts/AuthContext";
import LocationController from "@/components/LocationController";
import Providers from "@/components/Providers";
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for Sentrip travel website
  title: "SenTrip - Khám phá Việt Nam",
  description: "Khám phá những điểm đến tuyệt vời ở Việt Nam cùng SenTrip",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AuthProvider>
          <LocationController />
            <Providers>
              {children}
            </Providers>
          <Toaster />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
