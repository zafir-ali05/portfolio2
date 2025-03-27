"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BarChart2 } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Investment ePortfolio",
    description: "Allows for efficient management of either mutual funds and stocks.",
    status: "completed",
    type: "academic",
    tags: ["Java"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Grade Calculator",
    description: "Easily calculate averages and required marks to achieve a certain grade",
    link: "https://github.com/zafir-ali05/GradeCalculator",
    status: "completed",
    type: "personal",
    tags: ["Java"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "EncryptGate",
    description: "An AI-driven email security system with AWS integration.",
    link: "https://github.com/zafir-ali05/EncryptGate",
    status: "work in progress",
    type: "group",
    tags: ["Python", "AWS", "Next.js"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "AlertMate",
    description:
      "A community-driven safety mobile app designed to report suspicious activities, access emergency resources, and stay informed about potential threats.\n\nDeveloped for Hack Canada 2025 Hackathon",
    link: "https://github.com/zafir-ali05/NeighborhoodSafetyNetwork",
    status: "completed",
    type: "group",
    tags: ["Flutter", "Firebase", "Google Cloud Platform"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Wordz",
    description:
      "A real-time multiplayer spelling bee game where players take turns spelling words correctly to earn points! Challenge your friends and improve your spelling skills in this fun, educational web application.",
    link: "https://github.com/zafir-ali05/Wordz",
    status: "work in progress",
    type: "group",
    tags: ["Next.js", "MongoDB", "Express.js", "Railway/Heroku"],
    image: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?q=80&w=1000&auto=format&fit=crop",
  },
]

// First row filters
const firstRowFilters = [
  { id: "all", label: "All Projects" },
  { id: "completed", label: "Completed" },
  { id: "work in progress", label: "In Progress" },
]

// Second row filters
const secondRowFilters = [
  { id: "personal", label: "Personal" },
  { id: "academic", label: "Academic" },
  { id: "group", label: "Group" },
]

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) => activeFilter === "all" || project.status === activeFilter || project.type === activeFilter,
    )
  }, [activeFilter])

  // Calculate stats
  const stats = [
    { label: "Total", value: projects.length },
    { label: "Completed", value: projects.filter((p) => p.status === "completed").length },
    { label: "In Progress", value: projects.filter((p) => p.status === "work in progress").length },
    { label: "Personal", value: projects.filter((p) => p.type === "personal").length },
    { label: "Group", value: projects.filter((p) => p.type === "group").length },
  ]

  return (
    <div className="relative py-32" id="projects">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header with title and stats */}
        <div className="mb-16">
          {/* Title and Stats Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-zinc-900"
            >
              Projects
            </motion.h2>

            {/* Stats Section - Minimal Horizontal Format */}
            <motion.div
              className="flex items-center space-x-4 text-xs text-zinc-500 mt-2 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center">
                <BarChart2 size={12} className="mr-1" />
                <span className="font-medium">Stats:</span>
              </div>
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  <span className="font-medium text-zinc-800">{stat.value}</span>
                  <span className="ml-1">{stat.label}</span>
                  {index < stats.length - 1 && <span className="ml-1 text-zinc-300">•</span>}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Filter Pills - First Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-2 mt-2 mb-2">
              {firstRowFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? "bg-zinc-900 text-white shadow-lg"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Filter Pills - Second Row (Indented) */}
            <div className="flex flex-wrap gap-2 pl-3">
              {secondRowFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? "bg-zinc-900 text-white shadow-lg"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-zinc-500 text-lg">No projects match the selected filter.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

const ProjectCard = ({ project, index }) => {
  // Wrapper component that conditionally renders either a link or a div
  const CardWrapper = ({ children }) => {
    if (project.link) {
      return (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
          {children}
        </a>
      )
    }
    return <div className="h-full">{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative"
      layout
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardWrapper>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-200 group-hover:border-zinc-300 transition-all duration-300 shadow-sm group-hover:shadow-xl h-full flex flex-col">
          {/* Image section - further reduced height */}
          <div className="relative h-28 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
            <Image
              src={project.image || "/placeholder.svg?height=400&width=600"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 blur-[4px]"
              width={600}
              height={400}
            />

            {/* Badges stacked on right side */}
            <div className="absolute top-2 right-2 z-20 flex flex-col gap-1 items-end">
              {/* Status badge - now on top */}
              <span
                className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                  project.status === "completed" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                }`}
              >
                {project.status === "completed" ? "Completed" : "In Progress"}
              </span>

              {/* Project type badge - now below status */}
              <span
                className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                  project.type === "personal"
                    ? "bg-blue-100 text-blue-800"
                    : project.type === "academic"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-teal-100 text-teal-800"
                }`}
              >
                {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
              </span>
            </div>
          </div>

          {/* Content section - further reduced padding */}
          <div className="p-3 flex flex-col flex-grow">
            <h3 className="text-base font-bold text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-zinc-600 mb-2 text-xs flex-grow">{project.description.split("\n")[0]}</p>

            {/* Tags - even smaller tags */}
            <div className="flex flex-wrap gap-1 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 bg-zinc-100 rounded-full text-[10px] font-medium text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  )
}

export default ProjectsSection

