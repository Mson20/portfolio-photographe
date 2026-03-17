import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { photos } from '../data/photo'

const categories = ['Tout', 'portrait', 'mariage', 'corporate']

export default function Gallery() {
  const [catActive, setCatActive] = useState('Tout')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  // Filtre les photos selon la catégorie active
  const photosFiltrees = catActive === 'Tout'
    ? photos
    : photos.filter(p => p.cat === catActive)

    // Format attendu par la Lightbox
  const slides = photos.map(p => ({ src: p.src, alt: p.alt }))

  const ouvrirLightbox = (photo) => {
    // Trouve l'index dans le tableau ORIGINAL (pas filtré)
    // pour que la navigation lightbox soit correcte
    const index = photos.findIndex(p => p.id === photo.id)
    setPhotoIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="galerie" className="py-24 px-8 bg-black">

      {/* Titre de section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-medium text-white mb-12 text-center">
        Galerie
      </motion.h2>

      {/* Boutons filtres */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCatActive(cat)}
            className={`text-xs tracking-widest uppercase px-6 py-2 border transition-all duration-300
              ${catActive === cat
                ? 'border-white text-black bg-white'
                : 'border-white/30 text-gray-400 hover:border-white hover:text-white'
              }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grille masonry */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-3">
        <AnimatePresence>
          {photosFiltrees.map(photo => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="mb-3 cursor-pointer overflow-hidden group"
              onClick={() => ouvrirLightbox(photo)}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full block transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={photoIndex}
      />

    </section>
  )
}