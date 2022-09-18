import { FiMenu } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { HeaderContainer, NavBarContainer } from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <button>
          <FiMenu size={24} />
        </button>
        <NavLink to={'/'} className="logo">
          News Worlds
        </NavLink>
      </HeaderContainer>
      <NavBarContainer>
        <ul>
          <li>
            <NavLink to="/">Página Inicial</NavLink>
          </li>
          <li>
            <NavLink to="category/general">General</NavLink>
          </li>
          <li>
            <NavLink to="category/business">Negocios</NavLink>
          </li>
          <li>
            <NavLink to="category/entertainment">entreterimento</NavLink>
          </li>
          <li>
            <NavLink to="category/health">saúde</NavLink>
          </li>
          <li>
            <NavLink to="category/science">ciência</NavLink>
          </li>
          <li>
            <NavLink to="category/sports">esportes</NavLink>
          </li>
          <li>
            <NavLink to="category/technology">tecnologia</NavLink>
          </li>
        </ul>
      </NavBarContainer>
    </>
  )
}
