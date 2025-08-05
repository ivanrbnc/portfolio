export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="absolute top-6 left-6">
        <div className="w-25 h-25 rounded-full overflow-hidden border-2 border-white shadow-lg">
          <img src="/images/ivan-profile.png" alt="Ivan Rabbani Cezeliano" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  )
}
