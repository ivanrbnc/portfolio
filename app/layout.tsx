import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteUrl = "https://ivanrbnc.vatalistech.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ivan Cezeliano",
  description: "Ivan's Portfolio",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "Ivan Cezeliano",
    description: "Ivan's Portfolio",
    url: siteUrl,
    siteName: "Ivan Cezeliano",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Cezeliano",
    description: "Ivan's Portfolio",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
