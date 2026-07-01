import './Pedestal.css'

export default function Pedestal({ children }) {
  return (
    <div className="pedestal">
      <div className="pedestal__top">{children}</div>
      <div className="pedestal__base" />
    </div>
  )
}