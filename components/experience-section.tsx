"use client"

import { motion, useInView } from "framer-motion"
import type { Variants } from "framer-motion"
import { ExperienceItem } from "./experience-item"
import { useRef } from "react"

// Professional animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const timelineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.5
    }
  }
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3 
    }
  }
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

export function ExperienceSection() {
  const ref = useRef(null)
  const titleRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" })

  return (
    <section className="space-y-8">
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
          Work Experience
        </motion.h3>

      </motion.div>

      <motion.div
        ref={ref}
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Enhanced Timeline */}
        <motion.div 
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-600 rounded-full origin-top"
          variants={timelineVariants}
        />

        <div className="space-y-8">
          <motion.div variants={slideInLeft}>
            <ExperienceItem
              position="Solution Engineer Intern"
              company="PT Mid Solusi Nusantara (Mekari)"
              date="Mar 2025 - Apr 2025"
              description={[
                "Co-developed an application that migrates ClickUp to Mekari Officeless, enabling automation of key processes and contributing to a projected 50%+ budget reduction",
                "Originated the idea to redevelop 9+ core features of the ClickUp migration application by identifying structural inefficiencies and crafting foundational technical documentation"
              ]}
              index={0}
            />
          </motion.div>
          
          <motion.div variants={slideInLeft}>
            <ExperienceItem
              position="Artificial Intelligence Exploration Intern"
              company="PT Telekomunikasi Selular (Telkomsel)"
              date="Sep 2024 - Dec 2024"
              description={[
                "Explored Telkomsel AI agents' capabilities using stress testing up to 500 consecutive prompts and contributed to a 10-section prompting guideline adopted 100% by Telkomsel",
                "Discovered and implemented a responsive behavior mechanism in an AI agent, adopted across other Telkomsel AI agents to enhance performance consistency by up to 40%",
                "Conducted comprehensive testing on the MyEnterprise platform using Selenium, executing 50 test cases and identifying 10 bugs"
              ]}
              index={1}
            />
          </motion.div>
          
          <motion.div variants={slideInLeft}>
            <ExperienceItem
              position="IT Enterprise Assisted In-Sales Intern"
              company="PT Telekomunikasi Selular (Telkomsel)"
              date="Jun 2024 - Jul 2024"
              description={[
                "Optimized a generative B2B AI chatbot, Ted, for account managers by automating test flows using Selenium and NLP models, achieving 15% accuracy improvement",
                "Deployed automation workflows to enhance lead verification process using Selenium and sentiment polarity, reducing manual effort and boosting productivity by over 25%",
                "Developed an automation program leveraging data-driven insights to elevate Telkomsel's market visibility among key stakeholders by over 10%"
              ]}
              index={2}
            />
          </motion.div>
          
          <motion.div variants={slideInLeft}>
            <ExperienceItem
              position="Teaching Assistant of Platform-Based Programming"
              company="Faculty of Computer Science, University of Indonesia"
              date="Aug 2023 - Dec 2023"
              description={[
                "Delivered support for platform-based programming assignments, driving a 10% improvement in student performance metrics",
                "Played a key role in the development and refinement of 2 foundational assignments and grading rubrics, ensuring 100% alignment with learning outcomes",
                "Mentored 17 students individually while collaborating with over 20 teaching assistants to maintain a high-quality learning environment"
              ]}
              index={3}
            />
          </motion.div>
        </div>

        {/* Subtle Background Elements */}
        <motion.div
          className="absolute -top-10 -right-10 w-20 h-20 bg-slate-500/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween"
          }}
        />
        <motion.div
          className="absolute bottom-10 -left-10 w-24 h-24 bg-slate-500/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            type: "tween",
            delay: 2
          }}
        />
      </motion.div>
    </section>
  )
}