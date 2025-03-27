"use client"

import { motion } from "framer-motion"
import { Code, GraduationCap, Briefcase, ArrowRight } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-left"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4"
            style={{ fontFamily: "'Propolish Rufftu', serif" }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 items-center">
          {/* Content Column */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-600 mb-6">
              I'm a growing developer who's enthusiastic about learning both front-end and back-end technologies. My
              journey in tech began with curiosity about how digital experiences are created, and I'm continuously
              expanding my skills to build better solutions. I'm still in the learning phase, embracing each challenge
              as an opportunity to improve and develop my abilities.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <GraduationCap size={18} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Computer Science, University of Guelph</h4>
                  <p className="text-sm text-zinc-500">2023 - 2028 (Expected)</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                  <Briefcase size={18} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Looking for Internship Opportunities</h4>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                  <Code size={18} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800">Hackathon Participant, Hack Canada 2025</h4>
                  <p className="text-sm text-zinc-500">Project: AlertMate - Community Safety App</p>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.a
              href="https://drive.google.com/file/d/1UZ2JdaiojD6cx_wsinJ4aNFc4OFQf8ii/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              View Full Resume <ArrowRight size={16} className="ml-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

