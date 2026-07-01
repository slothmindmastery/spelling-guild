import { useState } from 'react'
import { motion } from 'framer-motion'
import Pedestal from './Pedestal'
import Soundstone from './Soundstone'
import './StoneCarousel.css'

const slots = {
  '-2': { x: '-38vw', y: 28, scale: 0.78, opacity: 0.75 },
  '-1': { x: '-19vw', y: 14, scale: 0.95, opacity: 0.9 },
  0: { x: '0vw', y: 0, scale: 1.12, opacity: 1 },
  1: { x: '19vw', y: 14, scale: 0.95, opacity: 0.9 },
  2: { x: '38vw', y: 28, scale: 0.78, opacity: 0.75 },
}

export default function StoneCarousel({ sounds }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  function getCircularOffset(index) {
    const total = sounds.length
    let offset = index - selectedIndex

    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total

    return offset
  }

  function goPrevious() {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? sounds.length - 1 : currentIndex - 1,
    )
  }

  function goNext() {
    setSelectedIndex((currentIndex) =>
      currentIndex === sounds.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <section className="stone-carousel">
      <button className="stone-carousel__arrow" onClick={goPrevious}>
        ←
      </button>

      <div className="stone-carousel__track">
        {sounds.map((sound, index) => {
          const offset = getCircularOffset(index)
          const slot = slots[offset]
          const isVisible = Boolean(slot)

          return (
            <motion.div
              key={sound.sound_code}
              className="stone-carousel__item"
              animate={{
                x: isVisible ? slot.x : offset < 0 ? '-55vw' : '55vw',
                y: isVisible ? slot.y : 60,
                scale: isVisible ? slot.scale : 0.5,
                opacity: isVisible ? slot.opacity : 0,
                zIndex: isVisible ? 10 - Math.abs(offset) : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 28,
              }}
            >
              <Pedestal>
                <Soundstone sound={sound} />
              </Pedestal>
            </motion.div>
          )
        })}
      </div>

      <button className="stone-carousel__arrow" onClick={goNext}>
        →
      </button>
    </section>
  )
}