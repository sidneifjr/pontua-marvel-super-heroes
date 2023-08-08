import {
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
} from './styles'

import { Button } from '../../components/Button'

import loginAlt from '/icons/login-alt.svg'

export const AgentSelectionPage = () => {
  return (
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
  )
}
