import Pedestal from './Pedestal'
import Soundstone from './Soundstone'
import './StoneCarousel.css'

export default function StoneCarousel({ sounds }) {
  const focusIndex = 4

  return (
    <section className="stone-carousel">
      <div className="stone-carousel__track">
        {sounds.map((sound, index) => {
          const distanceFromFocus = Math.abs(index - focusIndex)

          const scale = Math.max(0.65, 1.35 - distanceFromFocus * 0.12)

          const yOffset = distanceFromFocus * 10

          return (
            <div
              key={sound.sound_code}
              className="stone-carousel__item"
              style={{
                '--stone-scale': scale,
                '--stone-y': `${yOffset}px`,
              }}
            >
              <Pedestal>
                <Soundstone sound={sound} />
              </Pedestal>
            </div>
          )
        })}
      </div>
    </section>
  )
}