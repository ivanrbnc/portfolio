"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ProjectItem } from "./project-item"

// Professional animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      delay: i * 0.1, 
      duration: 0.7, 
      ease: [0.25, 0.46, 0.45, 0.94],
      scale: { type: "spring", stiffness: 300, damping: 25 }
    }
  })
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const allProjects = [
  {
    title: "Apartment Listings Price Prediction",
    description:
      "A machine learning project that predicts apartment prices based on various features such as location, size, and amenities.",
    technologies: ["Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Scipy"],
    image: "/projects/price-prediction.png",
    links: {
      demo: "https://drive.google.com/file/d/1V-7bIGraxySAB-mVBlAiRtxx5SczSr_2/view?usp=drive_link",
    },
  },
  {
    title: "Gender Age Emotion Facial Recognition",
    description:
      "Computer vision project that predicts gender, age, and emotion using deep learning and facial recognition analysis.",
    technologies: ["Computer Vision", "Machine Learning", "Python", "Keras"],
    image: "/projects/emotion-detection.png",
    links: {
      github: "https://github.com/ivanrbnc/gender-age-emotion",
    },
  },
  {
    title: "SIWADI - Warehouse Information System",
    description:
      "Warehouse management system for paint distributors.",
    technologies: ["System Analysis", "Next.js", "React", "Java","Spring Boot", "API", "Tailwind CSS", "Typescript"],
    image: "/projects/siwadi.png",
    links: {
      demo: "https://www.youtube.com/watch?v=Np6-LmrMsLo",
    },
  },
  {
    title: "Ivanrbnc's Portfolio Website",
    description:
      "A modern responsive portfolio website built with Next.js and Tailwind CSS to showcase work and projects.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/projects/portfolio.png",
    links: {
      demo: "https://ivanrbnc.xyz",
      github: "https://github.com/ivanrbnc/portfolio",
    },
  },
  {
    title: "RSA-OAEP Algorithm Implementation",
    description:
      "Cryptographic implementation of RSA-OAEP for secure encryption and data transmission.",
    technologies: ["Cryptography", "Python", "RSA-OAEP"],
    image: "/projects/rsa-oaep.png",
    links: {
      github: "https://github.com/ivanrbnc/RSA-OAEP",
    },
  },
  {
    title: "Cultour",
    description:
      "Cultural immersion app prototype that educates users on global cultures through virtual exploration, cultural atlases, and interactive visualizations.",
    technologies: ["Prototype", "Figma"],
    image: "/projects/cultour.png",
    links: {
      demo: "https://www.figma.com/proto/tCyMxHEZ4aJSM8WttIsZpb/Cultour-Prototype--VYN-?node-id=190-1226&p=f&t=Eh2II78sf0GdkCDP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=190%3A1226",
    },
  },
  {
    title: "Phantom Striker - Game Development",
    description:
      "2D action game built with Godot featuring platform mechanics and combat systems.",
    technologies: ["Game Design", "Godot", "GDScript"],
    image: "/projects/phantom-striker.png",
    links: {
      demo: "https://team-bunglon.itch.io/phantom-striker",
    },
  },
  {
    title: "Fooody Buddy - Food Tracking App",
    description:
      "Nutrition and food tracking app with web and mobile platforms.",
    technologies: ["Web Development", "Mobile App", "HTML", "CSS", "Flutter"],
    image: "/projects/fooody.png",
    links: {
      githubWeb: "https://github.com/ramyanareswari/TK-A02",
      githubMobile: "https://github.com/ramyanareswari/fooody-mobile-app",
    },
  },
]

export function ProjectsGrid() {
  const [visibleProjects, setVisibleProjects] = useState(3)
  const [isExpanding, setIsExpanding] = useState(false)

  const showMoreProjects = () => {
    setIsExpanding(true)
    setVisibleProjects((prev) => Math.min(prev + 3, allProjects.length))
  }

  const showLessProjects = () => {
    setIsExpanding(false)
    setVisibleProjects(3)
  }

  const ref = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" })

  return (
    <section id="projects-section" className="space-y-8 mb-8">
      {/* Enhanced Title Section */}
      <motion.div
        ref={titleRef}
        variants={staggerContainer}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        className="text-center"
      >
        <motion.h3
          className="text-3xl font-bold text-slate-800 dark:text-slate-100"
          variants={fadeInUp}
          custom={0}
        >
          Projects
        </motion.h3>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatePresence mode="wait">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              variants={slideInFromBottom}
              custom={index}
              initial="hidden"
              animate="visible"
              exit={{ 
                opacity: 0, 
                y: -20, 
                scale: 0.95,
                transition: { duration: 0.3 }
              }}
              layout
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
            >
              <ProjectItem project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Enhanced Action Buttons */}
      <motion.div
        variants={fadeInUp}
        custom={Math.ceil(visibleProjects / 3) + 1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex justify-center gap-4"
      >
        <AnimatePresence mode="wait">
          {visibleProjects < allProjects.length && (
            <motion.div
              key="show-more"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={showMoreProjects}
                variant="outline"
                className="flex items-center gap-2 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700"
              >
                <motion.div
                  animate={{ rotate: isExpanding ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
                Show More
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {visibleProjects > 3 && (
            <motion.div
              key="show-less"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={showLessProjects}
                variant="ghost"
                className="flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <ChevronUp className="w-4 h-4" />
                Show Less
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Subtle Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-16 h-16 bg-indigo-500/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-20 h-20 bg-purple-500/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween",
          delay: 3
        }}
      />
    </section>
  )
}