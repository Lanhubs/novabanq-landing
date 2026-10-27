import { useState } from "react"
import logo from "../assets/novabanq.png"

const navItems: { link: string; text: string }[] = [
  { link: "#how-it-works", text: "How it works" },
  { link: "#features", text: "Features" },
  { link: "#faqs", text: "FAQs" },
]

interface HeaderProps {
  onJoinWaitlist?: () => void
}

const Header = ({ onJoinWaitlist }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-6 relative z-50">
      <div className="flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Novabanq home">
          <img
            src={logo}
            alt="Novabanq"
            className="h-6 sm:h-7 w-auto object-contain"
          />
        </a>

        {/* Desktop / Tablet Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="text-[15px] font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              {item.text}
            </a>
          ))}
        </nav>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false)
              if (onJoinWaitlist) onJoinWaitlist()
              else window.location.hash = "waitlist"
            }}
            type="button"
            className="bg-[#45D17C] hover:bg-[#3bbd6e] active:scale-95 text-white font-semibold text-sm sm:text-[15px] px-5 py-2 sm:px-7 sm:py-3 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
          >
            Join waitlist
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-black/5 active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
        
        onMouseOut={()=> setIsMobileMenuOpen(false)}
        className="md:hidden absolute top-full left-6 right-0  p-4 bg-white/95 backdrop-blur-xl rounded-bl-xl rounded-tl-xl shadow-2xl border border-zinc-200/80 flex flex-col gap-2 z-50">
          <nav className="flex flex-col">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-emerald-50/70 transition-colors"
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
