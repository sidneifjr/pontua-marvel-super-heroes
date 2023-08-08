import { useState } from 'react'

import {
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
} from './styles'

import { Button } from '../../components/Button'

import atSign from '/icons/at-sign.svg'
import loginAlt from '/icons/login-alt.svg'

export const PasswordRecoveryPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <LoginContentForm>
      <LoginContentFormTitle>Recuperar senha</LoginContentFormTitle>

      <LoginContentFormDescription>
        Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um
        link com as instruções para você redefinir a sua senha.
      </LoginContentFormDescription>

      <fieldset>
        {!isInputFocused && <label htmlFor="email">Informe seu e-mail</label>}
        <input
          type="text"
          name="email"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />

        <a href="#">
          <img src={atSign} alt="" />
        </a>
      </fieldset>

      <Button variant="primary">
        entrar
        <img src={loginAlt} alt="" />
      </Button>
    </LoginContentForm>
  )
}
