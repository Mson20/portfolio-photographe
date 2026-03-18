import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

// Les champs du formulaire définis en dehors du composant
const champs = [
  { name: 'nom',        label: 'Nom complet',      type: 'text',  placeholder: 'Lucas Dupont' },
  { name: 'email',      label: 'Email',             type: 'email', placeholder: 'lucas@email.com' },
  { name: 'prestation', label: 'Type de prestation',type: 'text',  placeholder: 'Mariage, portrait...' },
  { name: 'date',       label: 'Date souhaitée',    type: 'date',  placeholder: '' },
]

export default function Contact() {
  // Un objet pour stocker tous les champs d'un coup
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    prestation: '',
    date: '',
    message: '',
  })

  // 3 états possibles : idle / sending / success / error
  const [status, setStatus] = useState('idle')

  // Mise à jour d'un champ : on garde les autres valeurs avec ...formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // empêche le rechargement de la page
    setStatus('sending')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setFormData({ nom: '', email: '', prestation: '', date: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-8 bg-neutral-950">
      <div className="max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center">
          <h2 className="text-3xl font-medium text-white mb-4">Travaillons ensemble</h2>
          <p className="text-gray-500 text-sm">
            Décrivez votre projet et je vous réponds sous 48h
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6">

          {/* Champs générés avec .map() */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {champs.map(champ => (
              <div key={champ.name} className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-gray-500">
                  {champ.label}
                </label>
                <input
                  type={champ.type}
                  name={champ.name}
                  value={formData[champ.name]}
                  onChange={handleChange}
                  placeholder={champ.placeholder}
                  required
                  className="bg-transparent border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-white/40 transition-colors placeholder:text-gray-700"
                />
              </div>
            ))}
          </div>

          {/* Textarea message */}
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-gray-500">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet..."
              required
              rows={5}
              className="bg-transparent border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-white/40 transition-colors placeholder:text-gray-700 resize-none"
            />
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="border border-white/30 text-white text-xs tracking-widest uppercase py-4 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>

          {/* Feedback */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-green-400">
              Message envoyé ! Je vous réponds sous 48h.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-red-400">
              Une erreur est survenue. Réessayez ou contactez-moi directement.
            </motion.p>
          )}

        </motion.form>
      </div>
    </section>
  )
}