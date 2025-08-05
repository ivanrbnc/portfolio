import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white shadow-lg relative">
          <Image src="/images/ivan-profile.png" alt="Ivan Rabbani Cezeliano" fill className="object-cover" />
        </div>
      </div>
    </header>
  )
}
