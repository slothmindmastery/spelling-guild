import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import SoundstoneCard from '../components/SoundstoneCard'

export default function SoundstoneVault() {
  const [sounds, setSounds] = useState([])

  useEffect(() => {
    async function getSounds() {
      const { data, error } = await supabase
        .from('sounds')
        .select('*')
        // MVP: Only show Soundstones that are part of the
        // Letters and Sounds progression. Additional Soundstones
        // such as schwa, suffixes and rare sounds remain in the
        // database and can be introduced later.
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
    <>
      <h1>The Spelling Guild</h1>

      <h2>Soundstone Vault</h2>

      <p>Soundstones loaded: {sounds.length}</p>

      {sounds.map((sound) => (
        <SoundstoneCard key={sound.sound_code} sound={sound} />
      ))}
    </>
  )
}