"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import type { Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
  })
}

export function ContactLinks() {
  const links = [
    { href: "https://github.com/ivanrbnc", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/ivan-cezeliano", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/ivanrbnc/", icon: Instagram, label: "Instagram" },
    { href: "mailto:ivanrbnc@gmail.com", icon: Mail, label: "Contact" },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 sm:flex gap-2 sm:gap-4 pt-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {links.map((link, i) => (
        <motion.div key={link.label} variants={fadeInUp} custom={i}>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="transition-all duration-300 hover:scale-105 text-xs sm:text-sm justify-start"
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <link.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {link.label}
            </a>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}
