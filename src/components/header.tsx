import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIcon} alt="Nlw Unite Icon" />

      <nav className='flex items-center gap-5 font-medium text-sm'>
        <NavLink href='/eventos'>
          Eventos
        </NavLink>
        <NavLink href='/participantes'>
          Participantes
        </NavLink>
      </nav>
    </div>
  )
}