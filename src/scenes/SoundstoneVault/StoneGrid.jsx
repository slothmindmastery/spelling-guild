import Pedestal from './Pedestal'
import Soundstone from './Soundstone'
import './StoneGrid.css'

export default function StoneGrid({ sounds }) {
  return (
    <section className="stone-grid">
      {sounds.map((sound) => (
        <Pedestal key={sound.sound_code}>
          <Soundstone sound={sound} />
        </Pedestal>
      ))}
    </section>
  )
}