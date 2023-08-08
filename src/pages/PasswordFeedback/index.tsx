import {
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
} from './styles'

import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export const PasswordFeedbackPage = () => {
  return (
    <LoginContentForm>
      <LoginContentFormTitle>
        Tudo certo <span>;)</span>
      </LoginContentFormTitle>

      <LoginContentFormDescription>
        Foi enviado um e-mail para você com instruções de como redefinir a sua
        senha.
      </LoginContentFormDescription>

      <Link to="/login">
        <Button variant="primary">voltar para o login</Button>
      </Link>
    </LoginContentForm>
  )
}
