import './Soundstone.css'

export default function Soundstone({ sound }) {
  return (
    <button className="soundstone">
      <div className="soundstone__stone">
        <span className="soundstone__name">
          {sound.name}
        </span>
      </div>

      <p className="soundstone__example">
        {sound.example_word}
      </p>
    </button>
  )
}