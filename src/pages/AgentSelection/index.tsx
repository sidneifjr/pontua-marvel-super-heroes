import {
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
  Select,
} from './styles'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ErrorMessage } from '../Login/styles'

export const AgentSelectionPage = () => {
  const [isError, setIsError] = useState<boolean>(false)
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      hero: '',
    },
  })

  const handleFormSubmit = (data: { hero: string }) => {
    const hero = data.hero.toLowerCase()

    if (hero === '' || hero === 'selecione um agente') {
      setIsError(true)
      return
    } else {
      navigate(`/perfil/${hero}`)
      setIsError(false)
    }
  }

  return (
    <LoginContentForm onSubmit={handleSubmit(handleFormSubmit)}>
      <LoginContentFormTitle>
        Selecione o seu agente mais legal <span>.</span>
      </LoginContentFormTitle>

      <LoginContentFormDescription>
        informe as suas credenciais de acesso ao portal
      </LoginContentFormDescription>

      {isError ? (
        <ErrorMessage className="error-message">Escolha um herói</ErrorMessage>
      ) : (
        ''
      )}

      <Select
        className={isError ? 'error' : ''}
        {...register('hero')}
        data-cy="select"
      >
        <option value="Captain America">Captain America</option>
        <option value="Cyclops">Cyclops</option>
        <option value="Daredevil">Daredevil</option>
        <option value="Hulk">Hulk</option>
        <option value="Iron Man">Iron Man</option>
        <option value="Spider-Man">Spider Man</option>
        <option value="Thor">Thor</option>
        <option value="Wolverine">Wolverine</option>
      </Select>

      <Button type="submit" variant="primary" data-cy="submit">
        entrar
      </Button>
    </LoginContentForm>
  )
}
