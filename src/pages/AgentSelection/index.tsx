import {
  Login,
  LoginContent,
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
} from './styles'

import { Button } from '../../components/Button'

import loginAlt from '/icons/login-alt.svg'
import Illustration from '/images/building.svg'
import Logo from '/images/logo_pontua_white.svg'

export const AgentSelectionPage = () => {
  return (
    <Login>
      <img src={Logo} alt="Pontua Logo" height="50px" width="169px" />

      <LoginContent>
        <img src={Illustration} alt="Building" />

        <LoginContentForm>
          <LoginContentFormTitle>
            Selecione o seu agente mais legal <span>.</span>
          </LoginContentFormTitle>

          <LoginContentFormDescription>
            informe as suas credenciais de acesso ao portal
          </LoginContentFormDescription>

          <Button variant="primary">
            entrar
            <img src={loginAlt} alt="" />
          </Button>
        </LoginContentForm>
      </LoginContent>
    </Login>
  )
}
