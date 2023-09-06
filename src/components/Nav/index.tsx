import { Link } from 'react-router-dom'

import {
  NavMenu,
  NavMenuHeader,
  NavMenuList,
  NavMenuListItem,
  NavMenuListItemLink,
} from './styles'

import { useContext } from 'react'
import { HeroContext } from '../../contexts/HeroContext'

import CurvedArrow from '/icons/corner-up-left.svg'
import Logo from '/icons/logo.svg'
import Home from '/icons/menu.svg'
import Profile from '/icons/perfil.svg'

export const Nav = () => {
  const { selectedHero } = useContext(HeroContext)

  return (
    <aside>
      <NavMenu>
        <NavMenuHeader>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </NavMenuHeader>

        <NavMenuList>
          <NavMenuListItem>
            <NavMenuListItemLink to="/home">
              <img src={Home} alt="" />
              <span>Home</span>
            </NavMenuListItemLink>
          </NavMenuListItem>

          <NavMenuListItem className={selectedHero ? '' : 'disabled'}>
            <NavMenuListItemLink
              to={selectedHero ? `/perfil/${selectedHero}` : '/perfil/'}
            >
              <img src={Profile} alt="" />
              <span>Perfil</span>
              {selectedHero && <span className="badge">{selectedHero}</span>}
            </NavMenuListItemLink>
          </NavMenuListItem>

          <NavMenuListItem className="logout">
            <NavMenuListItemLink to="/login">
              <img src={CurvedArrow} alt="" />
              <span>Sair</span>
            </NavMenuListItemLink>
          </NavMenuListItem>
        </NavMenuList>
      </NavMenu>
    </aside>
  )
}
