import type {Metadata} from "next"
import {Lexend} from "next/font/google"
import "./globals.css"

const inter = Lexend({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Quick Start",
  description: "Guide to speed up the creation of web pages",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://quick-startt.netlify.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
