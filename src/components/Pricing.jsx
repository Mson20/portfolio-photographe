import { motion } from 'framer-motion'

const forfaits = [
  {
    nom: 'Essentiel',
    prix: 299,
    desc: 'Idéal pour un portrait ou un shooting solo',
    inclus: ['2h de shooting', '20 photos retouchées', 'Galerie privée en ligne', 'Utilisation personnelle'],
    highlight: false,
  },
  {
    nom: 'Pro',
    prix: 599,
    desc: 'Parfait pour les mariages et événements',
    inclus: ['6h de shooting', '80 photos retouchées', 'Galerie privée en ligne', 'Utilisation commerciale', 'Album photo offert'],
    highlight: true,
  },
  {
    nom: 'Premium',
    prix: 999,
    desc: 'La formule complète sans compromis',
    inclus: ['Journée entière', '150 photos retouchées', 'Galerie privée en ligne', 'Utilisation commerciale', 'Album photo offert', 'Vidéo souvenir courte'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 px-8 bg-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-medium text-white text-center mb-4">
        Tarifs
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 text-center mb-16 text-sm">
        Des forfaits clairs, sans mauvaise surprise
      </motion.p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {forfaits.map((forfait, i) => (
          <motion.div
            key={forfait.nom}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex flex-col p-8 border transition-all duration-300
              ${forfait.highlight
                ? 'border-white bg-white/5'
                : 'border-white/10 hover:border-white/30'
              }`}>

            {forfait.highlight && (
              <span className="text-xs tracking-widest uppercase text-black bg-white px-3 py-1 self-start mb-6">
                Populaire
              </span>
            )}

            <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">{forfait.nom}</p>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-4xl font-medium text-white">{forfait.prix}</span>
              <span className="text-gray-500 text-sm">€</span>
            </div>
            <p className="text-gray-500 text-sm mb-8">{forfait.desc}</p>

            <ul className="flex flex-col gap-3 mb-10 flex-1">
              {forfait.inclus.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact"
              className={`text-center text-xs tracking-widest uppercase py-3 border transition-all duration-300
                ${forfait.highlight
                  ? 'border-white text-black bg-white hover:bg-transparent hover:text-white'
                  : 'border-white/30 text-white hover:border-white'
                }`}>
              Choisir ce forfait
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}