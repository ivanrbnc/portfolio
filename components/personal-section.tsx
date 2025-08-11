"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"
import { ContactLinks } from "./contact-links"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
  })
}

export function PersonalSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="space-y-8">
      <motion.div
        variants={fadeInUp}
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Card className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-slate-800 dark:to-slate-700 border-gray-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8 text-center">
            <motion.div
              variants={fadeInUp}
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex justify-center mb-6"
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-slate-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-gray-600 dark:text-slate-300" />
              </div>
            </motion.div>

            <motion.h3
              variants={fadeInUp}
              custom={2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4"
            >
              Want to Know More About Me?
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              custom={3}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed"
            >
              Feel free to reach out anytime, whether you&apos;re sharing an opportunity or simply saying hello, I&apos;ll make sure to respond. See you later!
            </motion.p>

            <motion.div
              variants={fadeInUp}
              custom={4}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex justify-center text-slate-600 dark:text-slate-300 mb-6"
            >
              <ContactLinks />
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
