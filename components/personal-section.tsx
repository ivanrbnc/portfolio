import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PersonalSection() {
  return (
    <section className="space-y-8">
      <Card className="bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Want to Know More About Me?
          </h3>
          
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Discover my hobbies, interests, personality, and what drives me beyond professional work.<br/>
            Get to know the person behind the code and projects.
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-slate-800 hover:bg-slate-900 text-white transition-all duration-300 hover:scale-105"
          >
            <Link href="/about-me" className="flex items-center gap-2">
              Explore My Personal Side
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}