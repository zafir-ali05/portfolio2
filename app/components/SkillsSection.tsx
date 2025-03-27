"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Skills with logos for first row
const skills = [
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "React",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VY4jYUNquJEJwBUD4uw6nQCVZmBsSx.png",
  },
  {
    name: "Next.js",
    logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
  },
  {
    name: "Python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Java",
    logo: "https://dev.java/assets/images/java-logo-vert-blk.png",
  },
  {
    name: "C/C++",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Express.js",
    logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  },
]

// Additional skills for the second row
const moreSkills = [
  {
    name: "MongoDB",
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "Firebase",
    logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "Flutter",
    logo: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
  },
  {
    name: "R",
    logo: "https://www.r-project.org/logo/Rlogo.svg",
  },
  {
    name: "SQL",
    logo: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
  },
  {
    name: "Docker",
    logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  },
  {
    name: "Git",
    logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  },
]

const SkillsSection = () => {
  // Create refs for measuring the width of the skill rows
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  return (
    <div className="py-24 overflow-hidden" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        {/* Added title with the same font as hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2"
            style={{ fontFamily: "'Square Pixel 22', monospace" }}
          >
            Worked with
          </h2>
        </motion.div>

        {/* First row - Left to Right */}
        <div className="mb-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              ref={row1Ref}
              className="flex gap-8 py-4"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40, // Slowed down animation
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate skills to create a seamless loop */}
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex items-center flex-shrink-0 px-4"
                  whileHover={{ y: -3 }}
                >
                  <div className="w-8 h-8 mr-3 relative flex-shrink-0">
                    <Image
                      src={skill.logo || "/placeholder.svg"}
                      alt={`${skill.name} logo`}
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  <span className="text-lg font-medium whitespace-nowrap text-zinc-800">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Second row - Right to Left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              ref={row2Ref}
              className="flex gap-8 py-4"
              animate={{
                x: [-1000, 0],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 50, // Slowed down animation, slightly different speed
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate skills to create a seamless loop */}
              {[...moreSkills, ...moreSkills, ...moreSkills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex items-center flex-shrink-0 px-4"
                  whileHover={{ y: -3 }}
                >
                  <div className="w-8 h-8 mr-3 relative flex-shrink-0">
                    <Image
                      src={skill.logo || "/placeholder.svg"}
                      alt={`${skill.name} logo`}
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  <span className="text-lg font-medium whitespace-nowrap text-zinc-800">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSection

