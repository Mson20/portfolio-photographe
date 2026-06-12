import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-neutral-950">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800"
            alt="Saamson artiste"
            loading="lazy"
            className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6">

          <p className="text-xs tracking-[.2em] uppercase text-gray-500">À propos</p>
          <h2 className="text-3xl font-medium text-white leading-snug">
            Capturer l'instant.<br />Créer l'émotion.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Passionné par les deux faces de l'art visuel, l'objectif et le pinceau. 
            Je photographie ce que le monde m'offre et je peins ce que mon imagination 
            me dicte. Chaque cliché, chaque toile est une façon différente de voir et 
            de ressentir le monde qui nous entoure.
          </p>

          {/* Valeurs */}
          <div className="flex flex-col gap-3 mt-2">
            {[
              { titre: 'Photographie', desc: 'Églises, nature, animaux, capter la beauté du quotidien' },
              { titre: 'Peinture acrylique', desc: 'Animaux, spiritualité, paysages sur toile' },
              { titre: 'Passion & authenticité', desc: 'Chaque œuvre reflète un regard sincère sur le monde' },
            ].map(val => (
              <div key={val.titre} className="flex gap-4 items-start">
                <div className="w-px h-8 bg-white/20 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">{val.titre}</p>
                  <p className="text-xs text-gray-500">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}