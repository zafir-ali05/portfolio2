"use client"

import { motion } from "framer-motion"
import { useCallback, useState, useEffect } from "react"


const HeroSection = () => {
  // Split the name into individual letters
  const nameLetters = "ZAFIR ALI".split("")

  // Define a custom order for the letters to appear (by index)
  // Original indices: [0,1,2,3,4,5,6,7,8] for "ZAFIR ALI"
  const appearanceOrder = [0, 3, 7, 1, 5, 8, 2, 4, 6]

  // Create a map of index to delay
  const delayMap: Record<number, number> = {}
  appearanceOrder.forEach((originalIndex, orderPosition) => {
    delayMap[originalIndex] = orderPosition
  })

  // Calculate when the last letter will finish appearing
  const lastLetterStartsAt = 1.5 + (appearanceOrder.length - 1) * 0.2
  const navStartDelay = lastLetterStartsAt + 1.5 // Start nav after last letter finishes its fade

  // Smooth scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Cascading letters animation in custom order */}
      <div className="flex mb-16">
        {nameLetters.map((letter, index) => (
          <motion.span
            key={`letter-${index}`}
            className="text-7xl md:text-9xl font-bold text-[#000000] tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2.5, // Lengthened fade-in duration
              delay: 1.5 + delayMap[index] * 0.2,
              ease: "easeInOut",
            }}
            style={{
              fontFamily: "'Square Pixel 22', monospace",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
              display: "inline-block",
              whiteSpace: "pre", // Preserve spaces
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Navigation menu below the name */}
      <motion.nav
        className="flex space-x-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: navStartDelay }}
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm uppercase tracking-wider cursor-pointer"
        >
          About
        </motion.button>
        <motion.button
          onClick={() => scrollToSection("projects")}
          className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm uppercase tracking-wider cursor-pointer"
        >
          Projects
        </motion.button>
        <motion.a
          href="https://drive.google.com/file/d/1UZ2JdaiojD6cx_wsinJ4aNFc4OFQf8ii/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm uppercase tracking-wider"
        >
          Resume
        </motion.a>
      </motion.nav>
    </div>
  )
}

export default HeroSection

