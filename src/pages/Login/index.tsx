import { useState } from 'react'

import {
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
  RecoverPassword,
} from './styles'

import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
import atSign from '/icons/at-sign.svg'
import eye from '/icons/eye.svg'
import shield from '/icons/shield.svg'

export const LoginPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <LoginContentForm>
      <LoginContentFormTitle>
        Bem-vindo <span>.</span>
      </LoginContentFormTitle>

      <LoginContentFormDescription>
        informe as suas credenciais de acesso ao portal
      </LoginContentFormDescription>

      <fieldset>
        {!isInputFocused && <label htmlFor="email">Insira seu email</label>}
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

      <fieldset>
        {!isInputFocused && <label htmlFor="password">Informe sua senha</label>}

        <input
          type="text"
          name="password"
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />

        <a href="#">
          <img src={eye} alt="" />
        </a>
      </fieldset>

      <Link to="/agent-selection">
        <Button variant="disabled">enviar link</Button>
      </Link>

      <RecoverPassword to="/password-recovery">
        <img src={shield} alt="" /> Esqueceu a senha?
      </RecoverPassword>
    </LoginContentForm>
  )
}
