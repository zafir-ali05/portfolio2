import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Footer from "./components/Footer"
import { FlickeringGrid } from "./components/ui/flickering-grid"
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zafir Ali - Portfolio",
  description: "Personal portfolio showcasing projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-zinc-800 relative`}>
        {/* Global background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <FlickeringGrid
            className="w-full h-full"
            squareSize={4}
            gridGap={6}
            color="#000000"
            maxOpacity={0.05}
            flickerChance={0.1}
          />
        </div>

        <main className="relative z-10">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}

