"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"

// Animation variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer
      ref={ref}
      className="border-t bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200 dark:border-slate-700"
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-6 py-8 text-center"
      >
        <p className="text-slate-600 dark:text-slate-300">
          © 2025 Ivan Rabbani Cezeliano
        </p>
      </motion.div>
    </footer>
  )
}
