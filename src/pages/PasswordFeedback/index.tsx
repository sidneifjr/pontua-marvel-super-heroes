import {
  Login,
  LoginContent,
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
} from './styles'

import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
import Illustration from '/images/building.svg'
import Logo from '/images/logo_pontua_white.svg'

export const PasswordFeedbackPage = () => {
  return (
    <Login>
      <img src={Logo} alt="Pontua Logo" height="50px" width="169px" />

      <LoginContent>
        <img src={Illustration} alt="Building" />

        <LoginContentForm>
          <LoginContentFormTitle>
            Tudo certo <span>;)</span>
          </LoginContentFormTitle>

          <LoginContentFormDescription>
            Foi enviado um e-mail para você com instruções de como redefinir a
            sua senha.
          </LoginContentFormDescription>

          <Link to="/login">
            <Button variant="primary">voltar para o login</Button>
          </Link>
        </LoginContentForm>
      </LoginContent>
    </Login>
  )
}
