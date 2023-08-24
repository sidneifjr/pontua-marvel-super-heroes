import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const NavMenu = styled.nav`
  height: 100%;
  min-width: 16rem;
  background: ${(props) => props.theme.white};
  box-shadow: 6px 0px 18px 0px rgba(0, 0, 0, 0.06);
  padding-top: 1.25rem;
  position: absolute;
  left: 0;
  z-index: 9;
`

export const NavMenuHeader = styled.div`
  padding-bottom: 0.92rem;
  padding-left: 1.64rem;
`

export const NavMenuList = styled.ul`
  border-top: solid 0.0625rem ${(props) => props.theme.divider};
  padding-top: 0.62rem;
  padding-right: 1.25rem;
  padding-bottom: 1.37rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & + .logout {
    padding-left: 1.64rem;
  }
`

export const NavMenuListItem = styled.li`
  &.logout {
    position: relative;
    padding-top: 1.75rem;

    &:before {
      content: '';
      width: 100%;
      height: 0.0625rem;
      background: ${(props) => props.theme.divider};
      position: absolute;
      top: 0;
      display: block;
    }
  }

  &.active {
    color: ${(props) => props.theme['orange-500']};

    svg {
      fill: ${(props) => props.theme['orange-500']};
    }
  }
`

export const NavMenuListItemLink = styled(NavLink)`
  background: ${(props) => props.theme.white};
  border-radius: 0.625rem;
  padding-top: 0.44rem;
  padding-bottom: 0.44rem;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.91rem;
  transition: background cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.25s;

  &:hover,
  &.active {
    background: ${(props) => props.theme['gray-250']};
  }

  svg {
    height: 1.25rem;
    width: 1.25rem;
  }

  span {
    font-size: 0.8125rem;
    line-height: normal;
    font-weight: 500;
    color: ${(props) => props.theme.black};
    letter-spacing: -0.02438rem;
  }
`
