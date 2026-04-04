'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Technologies', 'Vision', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-obsidian/90 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-18 flex items-center justify-between py-5">

        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16">
            <img src="/eldia-logo.png" alt="Eldia Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-display font-700 text-lg tracking-tight text-white">
            ELDIA ENTERPRISES
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href={'#' + link.toLowerCase()} className="font-body text-sm text-mist hover:text-white transition-colors duration-200 tracking-wide">
              {link}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-steel/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map(link => (
            <a key={link} href={'#' + link.toLowerCase()} onClick={() => setMenuOpen(false)} className="font-body text-base text-mist hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}