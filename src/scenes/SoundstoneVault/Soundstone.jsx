import { motion } from 'framer-motion'
import dormantStone from '../../assets/images/soundstones/soundstone-dormant.png'
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
      <img
        src={dormantStone}
        alt=""
        className="soundstone__image"
      />

      <span className="soundstone__name">{sound.name}</span>
    </motion.button>
  )
}