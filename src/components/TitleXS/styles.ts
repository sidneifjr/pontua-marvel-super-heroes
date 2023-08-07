import styled from 'styled-components'

const H3 = styled.h3`
  ${props => props.theme['title-xs']}; // importa todas as propriedades (estilos) de tal objeto.
  color: ${props => props.theme['base-subtitle']};
  position: absolute;
  top: -2.5rem;
  left: 0;
`

export { H3 }