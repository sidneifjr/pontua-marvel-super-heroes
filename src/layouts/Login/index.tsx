import { Outlet } from 'react-router-dom'
import { Login, LoginContent } from './styles'

import Illustration from '/images/building.svg'
import Logo from '/images/logo_pontua_white.svg'

export const LoginLayout = () => {
  return (
    <Login>
      <img src={Logo} alt="Pontua Logo" height="50px" width="169px" />

      <LoginContent>
        <img src={Illustration} alt="Building" />

        <Outlet />
      </LoginContent>
    </Login>
  )
}
