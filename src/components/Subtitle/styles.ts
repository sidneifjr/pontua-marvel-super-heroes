import styled from 'styled-components'

const H2 = styled.h2`
  flex-basis: 100%;
  ${props => props.theme['title-xl']};
  color: ${props => props.theme['base-title']};
  margin-bottom: 1rem;
`

export { H2 }