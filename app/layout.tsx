import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "UmMahrket - Nigeria's First Muslim Lifestyle Platform",
  description:
    "Shop verified Islamic products, book trusted Muslim service providers, and grow your business. Join 2,000+ Muslims on the waitlist.",
  keywords: ["halal", "muslim marketplace", "islamic products", "nigeria", "quran tutor", "halal food"],
  openGraph: {
    title: "UmMahrket - Shop. Connect. Grow.",
    description: "Nigeria's first comprehensive digital ecosystem for the Muslim community.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0B6E4F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
