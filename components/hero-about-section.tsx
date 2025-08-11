"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ContactLinks } from "@/components/contact-links"
import { Download } from 'lucide-react'

const dynamicTexts = [
  "I build projects.",
  "Software Engineer",
  "AI Enthusiast",
  "Data Science Specialist",
  "Full-Stack Developer",
  "Innovation Driver",
]

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
  })
}

export function HeroAboutSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return
    const currentFullText = dynamicTexts[currentTextIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1))
          setTypingSpeed(150)
        } else {
          setTypingSpeed(2000)
          setIsDeleting(true)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.substring(0, displayText.length - 1))
          setTypingSpeed(100)
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length)
          setTypingSpeed(500)
        }
      }
    }, typingSpeed)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, typingSpeed, isInView])

  const scrollToProjects = () => {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume/Ivan_Rabbani_Cezeliano_Resume.pdf"
    link.download = "Ivan_Rabbani_Cezeliano_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" ref={sectionRef} className="min-h-screen pt-32 sm:pt-28 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side */}
          <motion.div
            variants={fadeInUp}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-slate-100">
                Hello, I&apos;m
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold dark:text-slate-100">
                Ivan Rabbani Cezeliano,
              </h2>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 h-12 sm:h-14 md:h-16 flex items-center">
                <span className="border-r-2 border-red-500 pr-1 animate-pulse dark:text-red-400">{displayText}</span>
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button size="lg" onClick={scrollToProjects} className="hover:scale-105 w-full sm:w-auto">
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={downloadResume} className="hover:scale-105 w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <ContactLinks />
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeInUp}
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 lg:space-y-8 mt-8 lg:mt-0"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl lg:text-3xl font-bold text-center dark:text-slate-100 mb-6 lg:mb-8">About Me</h3>
              <div className="space-y-4 lg:space-y-6 dark:text-slate-300 text-sm lg:text-base">
                <p>
                  I&apos;m a fresh graduate with a degree in <strong>Information Systems</strong> from Universitas Indonesia. 
                  My passion lies at the intersection of data and software, with a keen interest in 
                  <span className="text-blue-600 font-semibold"> Data Analytics</span>, 
                  <span className="text-green-600 font-semibold"> Data Science</span>, 
                  <span className="text-purple-600 font-semibold"> Software Engineering</span>, and 
                  <span className="text-red-600 font-semibold"> Artificial Intelligence</span>.
                </p>
                <p>
                  I love building innovative solutions and collaborating with others to create meaningful impact through technology. 
                  I&apos;m always eager to learn new technologies and take on challenging projects that push my boundaries.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-8"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {[
                  { value: "4+", label: "Internships" },
                  { value: "10+", label: "Projects Built" },
                  { value: "4+", label: "Years of Study" },
                  { value: "17+", label: "Technologies" }
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeInUp} custom={i} className="text-center">
                    <div className="text-2xl lg:text-4xl font-bold dark:text-slate-100">{stat.value}</div>
                    <div className="text-xs lg:text-sm dark:text-slate-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
