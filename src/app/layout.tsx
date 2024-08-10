import type {Metadata} from "next"
import {Lexend} from "next/font/google"
import "./globals.css"
import {cookies} from "next/headers"
import {Footer, Header} from "./components"

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
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")?.value === "dark" ? "dark" : ""
  return (
    <html lang="en" className={theme}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
