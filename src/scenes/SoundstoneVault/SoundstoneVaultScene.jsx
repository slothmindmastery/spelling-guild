import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import VaultBackground from './VaultBackground'
import StoneCarousel from './StoneCarousel'
import StoneGrid from './StoneGrid'
import './SoundstoneVaultScene.css'

export default function SoundstoneVaultScene() {
  const [sounds, setSounds] = useState([])
  const [view, setView] = useState('carousel')

  useEffect(() => {
    async function getSounds() {
      const { data, error } = await supabase
        .from('sounds')
        .select('*')
        .not('letters_and_sounds_phase', 'is', null)
        .order('letters_and_sounds_phase')
        .order('letters_and_sounds_set')
        .order('display_order')

      if (error) {
        console.error(error)
        return
      }

      setSounds(data)
    }

    getSounds()
  }, [])

  return (
    <VaultBackground>
      <main className="soundstone-vault">
        <header className="soundstone-vault__header">
          <div>
            <h1>Soundstone Vault</h1>
            <p>Discover and restore the sounds of the Guild.</p>
            <p>{sounds.length} / 44 Soundstones</p>
          </div>

          <div className="soundstone-vault__view-toggle">
            <button onClick={() => setView('carousel')}>Carousel</button>
            <button onClick={() => setView('grid')}>Grid</button>
          </div>
        </header>

        {view === 'carousel' ? (
          <StoneCarousel sounds={sounds} />
        ) : (
          <StoneGrid sounds={sounds} />
        )}
      </main>
    </VaultBackground>
  )
}