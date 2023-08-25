import { useForm } from 'react-hook-form'

import atSign from '/icons/at-sign.svg'
import eye from '/icons/eye.svg'
import shield from '/icons/shield.svg'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import {
  ErrorMessage,
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
  RecoverPassword,
} from './styles'

interface IForm {
  email: string
  password: string
}

export const LoginPage = () => {
  const [isInputPasswordShown, setInputPasswordShown] = useState<boolean>(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>()

  const onSubmit = (data: IForm) => {
    console.log(errors)
    if (data) {
      navigate('/agent-selection')
    }
  }

  return (
    <LoginContentForm onSubmit={handleSubmit(onSubmit)}>
      <LoginContentFormTitle>
        Bem-vindo <span>.</span>
      </LoginContentFormTitle>

      <LoginContentFormDescription>
        informe as suas credenciais de acesso ao portal
      </LoginContentFormDescription>

      {errors.email ? (
        <ErrorMessage className="error-message">Email inválido</ErrorMessage>
      ) : (
        ''
      )}

      <fieldset>
        <input
          className={errors.email ? 'error' : ''}
          type="text"
          placeholder="Insira seu email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          data-cy="email"
        />

        <a href="#">
          <img src={atSign} alt="" />
        </a>
      </fieldset>

      {errors.password ? (
        <ErrorMessage className="error-message">Senha inválida</ErrorMessage>
      ) : (
        ''
      )}

      <fieldset>
        <input
          className={errors.password ? 'error' : ''}
          type={!isInputPasswordShown ? 'password' : 'text'}
          placeholder="Informe sua senha"
          {...register('password', { required: true, maxLength: 8 })}
          data-cy="password"
        />

        <a
          href="#"
          onClick={() => setInputPasswordShown(!isInputPasswordShown)}
        >
          <img src={eye} alt="" />
        </a>
      </fieldset>

      <Button type="submit" variant="primary" data-cy="submit-btn">
        enviar link
      </Button>

      <RecoverPassword to="/password-recovery">
        <img src={shield} alt="" /> Esqueceu a senha?
      </RecoverPassword>
    </LoginContentForm>
  )
}
