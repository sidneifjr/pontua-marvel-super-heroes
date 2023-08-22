import {
  LoginContentForm,
  LoginContentFormDescription,
  LoginContentFormTitle,
} from './styles'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

export const AgentSelectionPage = () => {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      hero: '',
    },
  })

  const handleFormSubmit = (data: { hero: string }) => {
    const hero = data.hero.toLowerCase()
    navigate(`/perfil/${hero}`)

    // Se eu quisesse armazenar mais de um herói, deveria fazer assim.
    // setHeroSelected((state) => [data.hero, ...state])
  }

  return (
    <LoginContentForm onSubmit={handleSubmit(handleFormSubmit)}>
      <LoginContentFormTitle>
        Selecione o seu agente mais legal <span>.</span>
      </LoginContentFormTitle>

      <LoginContentFormDescription>
        informe as suas credenciais de acesso ao portal
      </LoginContentFormDescription>

      <select
        {...register('hero')}
        style={{ width: '100%', marginBottom: '1rem' }}
      >
        <option value="Selecione um agente">Selecione um agente</option>
        <option value="Captain America">Captain America</option>
        <option value="Cyclops">Cyclops</option>
        <option value="Daredevil">Daredevil</option>
        <option value="Hulk">Hulk</option>
        <option value="Iron Men">Iron Men</option>
        <option value="Spider Man">Spider Man</option>
        <option value="Thor">Thor</option>
        <option value="Wolverine">Wolverine</option>
      </select>

      <Button type="submit" variant="primary">
        entrar
      </Button>
    </LoginContentForm>
  )
}
