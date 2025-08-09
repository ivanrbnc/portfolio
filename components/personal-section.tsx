import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"
import { ContactLinks } from "./contact-links"

export function PersonalSection() {
  return (
    <section className="space-y-8">
      <Card className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-slate-800 dark:to-slate-700 border-gray-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-100 dark:bg-slate-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600 dark:text-slate-300" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Want to Know More About Me?
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out anytime, whether you&apos;re sharing an opportunity or simply saying hello, I&apos;ll make sure to respond. See you later!
          </p>
          
          <div className="flex justify-center text-slate-600 dark:text-slate-300 mb-6">
            <ContactLinks />
          </div>

        </CardContent>
      </Card>
    </section>
  )
}