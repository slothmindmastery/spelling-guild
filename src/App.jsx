import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import './App.css'

function App() {
  const [soundstones, setSoundstones] = useState([])

  useEffect(() => {
    async function getSoundstones() {
      const { data, error } = await supabase
        .from('soundstones')
        .select('*')

      if (error) {
        console.error(error)
        return
      }

      setSoundstones(data)
    }

    getSoundstones()
  }, [])

  return (
    <>
      <h1>The Spelling Guild</h1>
      <h2>Soundstone Vault</h2>

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

export default App