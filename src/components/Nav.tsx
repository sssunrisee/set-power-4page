import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_#DDE3ED]'
          : 'bg-[#0B1D3A]'
      }`}
    >
      <div className="max-w-[1380px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/logo.png" alt="SET" className="h-10 w-auto" />
          <div>
            <div
              className={`font-condensed font-bold text-sm tracking-[0.12em] uppercase transition-colors ${
                scrolled ? 'text-[#0A1628]' : 'text-white'
              }`}
            >
              SET
            </div>
            <div
              className={`font-condensed text-[10px] tracking-[0.1em] uppercase transition-colors ${
                scrolled ? 'text-[#5A7090]' : 'text-[#7A9CC0]'
              }`}
            >
              Smart Engineering Technologies
            </div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-0">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-4 py-2 text-[12px] font-medium tracking-wide transition-colors duration-150 ${
                location.pathname === l.href
                  ? scrolled ? 'text-[#0056B3]' : 'text-white'
                  : scrolled ? 'text-[#2A4A7A] hover:text-[#0056B3]' : 'text-[#A0B8D8] hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden xl:flex items-center gap-2 px-5 py-2.5 bg-[#00A9E0] text-white font-condensed font-bold text-[12px] tracking-[0.1em] uppercase hover:bg-[#00BFFF] transition-colors duration-200 flex-shrink-0"
        >
          Contact Us
        </Link>

        <button
          className={`xl:hidden p-2 transition-colors ${scrolled ? 'text-[#0B1D3A]' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path
              d={mobileOpen ? 'M1 1L21 15M21 1L1 15' : 'M0 1h22M0 8h22M0 15h22'}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden bg-[#0B1D3A] border-t border-[#1A3058] px-6 py-5 space-y-0">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[13px] text-[#A0B8D8] hover:text-white border-b border-[#1A3058] last:border-0 font-medium tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 py-3 text-center bg-[#D4AF37] text-[#0B1D3A] font-condensed font-bold text-[12px] tracking-[0.1em] uppercase"
          >
            Запросить встречу
          </Link>
        </div>
      )}
    </header>
  )
}
