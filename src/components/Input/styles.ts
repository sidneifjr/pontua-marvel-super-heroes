import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  max-width: ${props => props.className === 'full' ? "100%" : "12.5rem"};
  ${props => props.theme['text-s']}
  background: ${props => props.theme['base-input']};
  border: ${props => props.theme['base-button']};
  border-radius: 0.25rem;
  padding: 0.75rem;

  & + span {
    ${props => props.theme['text-xs']}
    color: ${props => props.theme['base-label']};
    font-weight: 400;
    font-style: italic;
    position: absolute;
    top: 50%;
    right: 0.75rem;
    transform: translate3d(0,-50%,0);
    pointer-events: none;
  }
`

export { Input }