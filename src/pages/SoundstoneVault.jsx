import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function SoundstoneVault() {
  const [soundstones, setSoundstones] = useState([])

  useEffect(() => {
    async function getSoundstones() {
      const { data } = await supabase
        .from('soundstones')
        .select('*')

      setSoundstones(data || [])
    }

    getSoundstones()
  }, [])

  return (
    <>
      <h1>The Spelling Guild</h1>

      <h2>Soundstone Vault</h2>

      <p>Soundstones loaded: {soundstones.length}</p>

      {soundstones.map((soundstone) => (
        <section key={soundstone.id}>
          <h3>{soundstone.name}</h3>

          <p>{soundstone.ipa}</p>

          <p>{soundstone.description}</p>
        </section>
      ))}
    </>
  )
}