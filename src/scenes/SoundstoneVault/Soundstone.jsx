import { motion } from 'framer-motion'
import './Soundstone.css'

export default function Soundstone({ sound }) {
  return (
    <motion.button
      className="soundstone"
      whileHover={{ y: -10, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 18,
      }}
    >
      <div className="soundstone__stone">
        <span className="soundstone__name">{sound.name}</span>
      </div>
    </motion.button>
  )
}