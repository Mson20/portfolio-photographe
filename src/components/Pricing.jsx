import { motion } from 'framer-motion'
import './Pricing.css'

const tarifsPhoto = [
  {
    nom: 'Essentiel',
    prix: 299,
    desc: 'Idéal pour un portrait ou un shooting solo',
    features: ['2h de shooting', '20 photos retouchées', 'Galerie privée en ligne', 'Utilisation personnelle'],
    popular: false,
  },
  {
    nom: 'Pro',
    prix: 599,
    desc: 'Parfait pour les mariages et événements',
    features: ['6h de shooting', '80 photos retouchées', 'Galerie privée en ligne', 'Utilisation commerciale', 'Album photo offert'],
    popular: true,
  },
  {
    nom: 'Premium',
    prix: 999,
    desc: 'La formule complète sans compromis',
    features: ['Journée entière', '150 photos retouchées', 'Galerie privée en ligne', 'Utilisation commerciale', 'Album photo offert', 'Vidéo souvenir courte'],
    popular: false,
  },
]

const tarifsPeinture = [
  {
    nom: 'Petit format',
    prix: 80,
    taille: '20×20 cm',
    desc: 'Parfait pour décorer un espace intimiste',
    features: ['Peinture acrylique sur toile', 'Signée par l\'artiste', 'Livrée avec certificat', 'Emballage soigné'],
    popular: false,
  },
  {
    nom: 'Moyen format',
    prix: 150,
    taille: '40×50 cm',
    desc: 'La pièce maîtresse de votre intérieur',
    features: ['Peinture acrylique sur toile', 'Signée par l\'artiste', 'Livrée avec certificat', 'Emballage soigné', 'Châssis en bois inclus'],
    popular: true,
  },
  {
    nom: 'Grand format',
    prix: 280,
    taille: '60×80 cm',
    desc: 'Une œuvre d\'exception pour les grands espaces',
    features: ['Peinture acrylique sur toile', 'Signée par l\'artiste', 'Livrée avec certificat', 'Emballage soigné', 'Châssis en bois inclus', 'Livraison offerte'],
    popular: false,
  },
]

function CardsSection({ tarifs }) {
  return (
    <div className="pricing-grid">
      {tarifs.map((t, i) => (
        <motion.div key={t.nom}
          className={`pricing-card ${t.popular ? 'popular' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}>
          {t.popular && <div className="popular-badge">Populaire</div>}
          <div className="pricing-top">
            <span className="pricing-nom">{t.nom}</span>
            {t.taille && <span className="pricing-taille">{t.taille}</span>}
            <div className="pricing-prix">
              {t.prix}<span>€</span>
            </div>
            <p className="pricing-desc">{t.desc}</p>
          </div>
          <ul className="pricing-features">
            {t.features.map(f => (
              <li key={f}>
                <span className="check">✓</span> {f}
              </li>
            ))}
          </ul>
          <a href="#contact" className="pricing-btn">
            {t.taille ? 'Commander' : 'Choisir ce forfait'}
          </a>
        </motion.div>
      ))}
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <motion.div className="pricing-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <h2>Tarifs</h2>
        <p>Des prix clairs, sans mauvaise surprise</p>
      </motion.div>

      <div className="pricing-block">
        <h3 className="pricing-block-title">📷 Photographie</h3>
        <CardsSection tarifs={tarifsPhoto} />
      </div>

      <div className="pricing-block">
        <h3 className="pricing-block-title">🎨 Peintures sur toile</h3>
        <p className="pricing-block-sub">Sur commande à partir de 200€ — <a href="#contact">me contacter</a></p>
        <CardsSection tarifs={tarifsPeinture} />
      </div>
    </section>
  )
}