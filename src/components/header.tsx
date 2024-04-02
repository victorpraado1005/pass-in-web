import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIcon} alt="Nlw Unite Icon" />

      <nav className='flex items-center gap-5 font-medium text-sm'>
        <a href="" className='text-zinc-300'>Eventos</a>
        <a href="">Participantes</a>
      </nav>
    </div>
  )
}