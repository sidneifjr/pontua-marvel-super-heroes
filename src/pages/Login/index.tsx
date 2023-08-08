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
  const [isInputPasswordShown, setInputPasswordShown] = useState(false)

  return (
    <LoginContentForm>
      <LoginContentFormTitle>
        Bem-vindo <span>.</span>
      </LoginContentFormTitle>

      <LoginContentFormDescription>
        informe as suas credenciais de acesso ao portal
      </LoginContentFormDescription>

      <fieldset>
        <input type="text" name="email" placeholder="Insira seu email" />

        <a href="#">
          <img src={atSign} alt="" />
        </a>
      </fieldset>

      <fieldset>
        <input
          type={isInputPasswordShown ? 'password' : 'text'}
          name="password"
          placeholder="Informe sua senha"
        />

        <a
          href="#"
          onClick={() => setInputPasswordShown(!isInputPasswordShown)}
        >
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
