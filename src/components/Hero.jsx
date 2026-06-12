import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1800&q=80"
          alt="Art et photographie"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <span className="hero-badge">PHOTOGRAPHIE · PEINTURE · PARIS</span>
          <h1>L'art de voir<br />le monde</h1>
          <p>Photographie et peintures acryliques : Capturer l'instant, Créer l'émotion.</p>
          <a href="#portfolio" className="btn-primary">Voir la galerie</a>
        </motion.div>
      </div>
    </section>
  )
}