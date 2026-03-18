import { useState, useEffect } from 'react'

const liens = ['Galerie', 'À propos', 'Tarifs', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 py-4
      ${scrolled || menuOpen ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>

      <div className="flex justify-between items-center">
        <span className="text-sm font-medium tracking-widest uppercase">Saamson</span>

        {/* Liens desktop */}
        <div className="hidden md:flex gap-8">
          {liens.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Bouton burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-6 py-8">
          {liens.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      )}

    </nav>
  )
}