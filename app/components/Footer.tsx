"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <motion.a
              href="https://github.com/zafir-ali05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/zafir-ali05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:contact@zafirali.com"
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Zafir Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

