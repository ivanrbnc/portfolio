"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="border-t bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-slate-200 dark:border-slate-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of the footer is visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <p className="text-slate-600 dark:text-slate-300">
          © 2025 Ivan Rabbani Cezeliano
        </p>
      </div>
    </motion.footer>
  )
}
