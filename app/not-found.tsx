'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

      <Header />

      {/* Main content */}
      <main className="flex items-center justify-center min-h-screen px-4 sm:px-6 pt-20 pb-10">
        <Card className="max-w-2xl w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg">
          <CardContent className="p-8 sm:p-12 text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl sm:text-9xl font-bold text-slate-300 dark:text-slate-600 mb-4">
                404
              </h1>
              <div className="w-24 h-1 bg-red-500 dark:bg-red-400 mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Page Not Found
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            {/* Flying Search Icon */}
            <div className="mb-8">
              <div className="bounce-slow w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Search className="w-8 h-8 text-slate-400 dark:text-slate-500" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="transition-all duration-300 hover:scale-105">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>

            {/* Additional Help */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Need help? Feel free to{" "}
                <a 
                  href="mailto:ivanrbnc@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  contact me
                </a>{" "}
                if you think this is an error.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
