export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <span className="text-sm tracking-widest uppercase text-white">Saamson</span>

        <div className="flex gap-8">
          {['Galerie', 'À propos', 'Tarifs', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs text-gray-500 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-600">© 2026 Saamson — Tous droits réservés</p>

      </div>
    </footer>
  )
}