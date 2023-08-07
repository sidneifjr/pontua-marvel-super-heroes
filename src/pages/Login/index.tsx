import { useState } from 'react'

import {
  Login,
  LoginContent,
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
  RecoverPassword,
} from './styles'

import { Button } from '../../components/Button'

import atSign from '/icons/at-sign.svg'
import eye from '/icons/eye.svg'
import loginAlt from '/icons/login-alt.svg'
import shield from '/icons/shield.svg'
import Illustration from '/images/building.svg'
import Logo from '/images/logo_pontua_white.svg'

export const LoginPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false)

  return (
    <Login>
      <img src={Logo} alt="Pontua Logo" height="50px" width="169px" />

      <LoginContent>
        <img src={Illustration} alt="Building" />

        <LoginContentForm>
          <LoginContentFormTitle>Bem-vindo</LoginContentFormTitle>

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
            {!isInputFocused && (
              <label htmlFor="password">Informe sua senha</label>
            )}

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

          <Button variant="primary">
            entrar
            <img src={loginAlt} alt="" />
          </Button>

          <RecoverPassword href="">
            <img src={shield} alt="" /> Esqueceu a senha?
          </RecoverPassword>
        </LoginContentForm>
      </LoginContent>
    </Login>
  )
}
