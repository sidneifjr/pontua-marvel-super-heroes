import styled, { css } from 'styled-components'

const Btn = styled.button<any>`
  border-radius: 0.375rem;
  transition: background ease-in-out 0.2s;

  border-radius: 0.625rem;

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          width: 100%;
          font-size: 1.5rem;
          line-height: normal;
          font-weight: 700;
          text-align: right;
          letter-spacing: -0.0975rem;
          text-transform: uppercase;
          color: ${(props) => props.theme['gray-150']};
          background: ${(props) => props.theme['blue-600']};
          padding: 1rem 6.69rem;
          color: var(--gray-150, #fbfbfb);
          display: flex;
          align-items: center;
          gap: 0.56rem;

          &:hover {
            background: ${(props) => props.theme['yellow-dark']};
          }
        `

      case 'disabled':
        return css`
          min-width: 5.6875rem;
          ${(props) => props.theme['button-m']};
          text-transform: uppercase;
          color: ${(props) => props.theme['base-text']};
          background: ${(props) => props.theme['base-button']};
          padding: 0.41rem 0.5rem;
          display: flex;
          align-items: center;

          svg {
            margin-right: 0.25rem;
          }

          &:hover {
            background: ${(props) => props.theme['base-hover']};
          }
        `
    }
  }}
`

export { Btn }
