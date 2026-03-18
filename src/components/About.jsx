import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="à-propos" className="py-24 px-8 bg-neutral-950">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Photo du photographe */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800"
            alt="Saamson photographe"
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
            La lumière juste,<br />au bon moment
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Photographe parisien depuis 10 ans, je me spécialise dans les portraits authentiques,
            les mariages intimistes et les shootings corporate. Mon approche ? Capter l'émotion
            vraie plutôt que la pose parfaite.
          </p>

          {/* Valeurs */}
          <div className="flex flex-col gap-3 mt-2">
            {[
              { titre: 'Authenticité', desc: 'Des moments vrais, pas des poses forcées' },
              { titre: 'Discrétion', desc: 'Je me fais oublier pour mieux capturer' },
              { titre: 'Livraison rapide', desc: 'Vos photos retouchées sous 2 semaines' },
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