import styled from 'styled-components'

const H1 = styled.h1`
  ${props => props.theme['title-xl']}; // importa todas as propriedades (estilos) de tal objeto.
  color: ${props => props.theme['base-title']};
  margin-bottom: 1rem;
`

export { H1 }