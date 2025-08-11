"use client"

import { motion, useInView } from "framer-motion"
import type { Variants } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" }
  })
}

type ExperienceItemProps = {
  position: string
  company: string
  date: string
  description: string[]
  index?: number
}

export function ExperienceItem({
  position,
  company,
  date,
  description,
  index = 0
}: ExperienceItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex items-start"
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 w-4 h-4 bg-gray-500 dark:bg-gray-400 rounded-full border-4 border-white dark:border-slate-800 shadow-md z-10" />

      {/* Card Content */}
      <Card className="ml-16 flex-1 dark:bg-slate-800 dark:border-slate-700">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div>
              <CardTitle>{position}</CardTitle>
              <CardDescription className="text-base">{company}</CardDescription>
            </div>
            <Badge variant="outline">{date}</Badge>
          </div>
          <div className="border-b border-slate-200 mt-3" />
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc list-outside pl-5">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
