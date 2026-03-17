import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 py-4 flex justify-between items-center ${scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <span className="text-sm font-medium tracking-widest uppercase">Saam Saam</span>
      <div className="flex gap-8">
        {['Galerie', 'À propos', 'Tarifs', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors">
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}