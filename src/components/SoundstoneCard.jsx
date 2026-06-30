export default function SoundstoneCard({ sound }) {
  const soundTypeLabels = {
    phoneme_vowel: 'Vowel',
    phoneme_consonant: 'Consonant',
    schwa: 'Schwa',
    suffix: 'Suffix',
    prefix: 'Prefix',
    compound_sound: 'Compound Sound',
  }

  return (
    <section>
      <h3>{sound.name}</h3>

      <p>
        <strong>National Curriculum:</strong> {sound.nc_symbol}
      </p>

      <p>
        <strong>IPA:</strong> {sound.ipa_symbol}
      </p>

      <p>
        <strong>Type:</strong>{' '}
        {soundTypeLabels[sound.sound_type] ?? sound.sound_type}
      </p>

      <p>
        <strong>Example:</strong> {sound.example_word}
      </p>

      <p>
        <strong>Letters and Sounds:</strong> Phase{' '}
        {sound.letters_and_sounds_phase}, Set{' '}
        {sound.letters_and_sounds_set}
      </p>
    </section>
  )
}