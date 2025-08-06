"use client"

import { useState, useEffect } from "react"
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

export function HeroAboutSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentFullText = dynamicTexts[currentTextIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1))
          setTypingSpeed(150)
        } else {
          // Finished typing, wait then start deleting
          setTypingSpeed(2000)
          setIsDeleting(true)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentFullText.substring(0, displayText.length - 1))
          setTypingSpeed(100)
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length)
          setTypingSpeed(500)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, typingSpeed])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section")
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
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
    <section id="about" className="min-h-screen pt-32 sm:pt-28 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Hero Text */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight mb-0">
                Hello, I&apos;m
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight mt-0">
                Ivan Rabbani Cezeliano,
              </h2>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 h-12 sm:h-14 md:h-16 flex items-center">
                <span className="border-r-2 border-red-500 pr-1 animate-pulse">{displayText}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={downloadResume}
                className="transition-all duration-300 hover:scale-105 bg-transparent w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <ContactLinks />
          </div>

          {/* Right Side - About Me Stats */}
          <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-center text-slate-800 mb-6 lg:mb-8">About Me</h3>

              <div className="space-y-4 lg:space-y-6 text-slate-600 leading-relaxed text-sm lg:text-base">
                <p>
                  {"I'm a fresh graduate with a degree in"} <strong>Information Systems</strong>{" "}
                  {
                    " from Universitas Indonesia. My passion lies at the intersection of data and software, with a keen interest in"
                  }{" "}
                  <span className="text-blue-600 font-semibold">Data Analytics</span>,{" "}
                  <span className="text-green-600 font-semibold">Data Science</span>,{" "}
                  <span className="text-purple-600 font-semibold">Software Engineering</span>, and{" "}
                  <span className="text-red-600 font-semibold">Artificial Intelligence</span>.
                </p>

                <p>
                  {
                    "I love building innovative solutions and collaborating with others to create meaningful impact through technology. I'm always eager to learn new technologies and take on challenging projects that push my boundaries."
                  }
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6 mt-6 lg:mt-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-4xl font-bold text-slate-800">4+</div>
                  <div className="text-xs lg:text-sm text-slate-600 mt-1">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-4xl font-bold text-slate-800">10+</div>
                  <div className="text-xs lg:text-sm text-slate-600 mt-1">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-4xl font-bold text-slate-800">4+</div>
                  <div className="text-xs lg:text-sm text-slate-600 mt-1">Years of Study</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-4xl font-bold text-slate-800">17+</div>
                  <div className="text-xs lg:text-sm text-slate-600 mt-1">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
