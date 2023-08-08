import {
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
} from './styles'

import { Button } from '../../components/Button'

import atSign from '/icons/at-sign.svg'
import loginAlt from '/icons/login-alt.svg'

export const PasswordRecoveryPage = () => {
  return (
    <LoginContentForm>
      <LoginContentFormTitle>Recuperar senha</LoginContentFormTitle>

      <LoginContentFormDescription>
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um
        link com as instruções para você redefinir a sua senha.
      </LoginContentFormDescription>

      <fieldset>
        <input type="text" name="email" placeholder="Informe seu e-mail" />

        <a href="#">
          <img src={atSign} alt="" />
        </a>
      </fieldset>

      <Button type="submit" variant="primary">
        entrar
        <img src={loginAlt} alt="" />
      </Button>
    </LoginContentForm>
  )
}
