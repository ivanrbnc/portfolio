import { Card, CardContent } from "@/components/ui/card"
import { ContactLinks } from "@/components/contact-links"
import { MessageCircle } from "lucide-react"

export function ConnectSection() {
  return (
    <section className="space-y-8">
      <Card className="bg-gradient-to-r from-slate-50 to-gray-50 border-gray-200 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-gray-600" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Interested in collaborating or just want to chat?
          </h3>

          <div className="flex justify-center mt-6">
            <ContactLinks />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
