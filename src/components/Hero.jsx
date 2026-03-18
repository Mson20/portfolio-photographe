import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end pb-16 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600')] bg-cover bg-center " />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-xs tracking-[.2em] uppercase text-gray-400 mb-3">
          Photographe · Paris
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .15 }}
          className="text-5xl font-medium leading-tight mb-4">
          Capturer<br />l'instant vrai
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: .6, delay: .3 }}
          className="text-sm text-gray-400 mb-8">
          Mariage · Portrait · Corporate
        </motion.p>
        <motion.a
          href="#galerie"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: .6, delay: .45 }}
          className="inline-block border border-white/40 text-sm px-8 py-3 tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Voir la galerie
        </motion.a>
      </div>
    </section>
  )
}