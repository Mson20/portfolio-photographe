import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { photos, peintures } from '../data/photos'
import './Gallery.css'

const photoCategories = ['Tous', 'Église', 'Nature', 'Animaux', 'Spirituel']

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('photos')
  const [filtre, setFiltre] = useState('Tous')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filteredPhotos = filtre === 'Tous'
    ? photos
    : photos.filter(p => p.category === filtre)

  const photoSlides = filteredPhotos.map(p => ({ src: p.src }))
  const peintureSlides = peintures.map(p => ({ src: p.src }))

  return (
    <section id="portfolio" className="gallery-section">

      {/* Titre */}
      <motion.div className="gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <span className="section-label">Portfolio</span>
        <h2>Mes créations</h2>
      </motion.div>

      {/* Onglets principaux */}
      <div className="main-tabs">
        <button
          className={`main-tab ${activeTab === 'photos' ? 'active' : ''}`}
          onClick={() => { setActiveTab('photos'); setLightboxIndex(-1) }}>
          📷 Photographie
        </button>
        <button
          className={`main-tab ${activeTab === 'peintures' ? 'active' : ''}`}
          onClick={() => { setActiveTab('peintures'); setLightboxIndex(-1) }}>
          🎨 Peintures
        </button>
      </div>

      <AnimatePresence mode="wait">

        {/* ── PHOTOS ── */}
        {activeTab === 'photos' && (
          <motion.div key="photos"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>

            {/* Filtres */}
            <div className="filter-tabs">
              {photoCategories.map(cat => (
                <button key={cat}
                  className={`filter-tab ${filtre === cat ? 'active' : ''}`}
                  onClick={() => setFiltre(cat)}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry pleine largeur */}
            <div className="masonry">
              <AnimatePresence>
                {filteredPhotos.map((photo, i) => (
                  <motion.div key={photo.id}
                    className="masonry-item"
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    onClick={() => setLightboxIndex(i)}>
                    <img src={photo.src} alt={photo.title} loading="lazy" />
                    <div className="masonry-overlay">
                      <span className="masonry-cat">{photo.category}</span>
                      <span className="masonry-title">{photo.title}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <Lightbox
              open={lightboxIndex >= 0}
              close={() => setLightboxIndex(-1)}
              index={lightboxIndex}
              slides={photoSlides}
            />
          </motion.div>
        )}

        {/* ── PEINTURES ── */}
        {activeTab === 'peintures' && (
          <motion.div key="peintures"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>

            <p className="peintures-intro">
              Peintures acryliques sur toile : animaux, spiritualité, paysages.
            </p>

            <div className="masonry">
              {peintures.map((p, i) => (
                <motion.div key={p.id}
                  className="masonry-item"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  onClick={() => setLightboxIndex(i)}>
                  <img src={p.src} alt={p.title} loading="lazy" />
                  <div className="masonry-overlay">
                    <span className="masonry-cat">{p.technique}</span>
                    <span className="masonry-title">{p.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Lightbox
              open={lightboxIndex >= 0}
              close={() => setLightboxIndex(-1)}
              index={lightboxIndex}
              slides={peintureSlides}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}