import styled, { css } from 'styled-components'

const Btn = styled.button<any>`
  width: 100%;
  border-radius: 0.625rem;
  transition: background ease-in-out 0.2s;

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          font-size: 1.5rem;
          line-height: normal;
          font-weight: 700;
          text-align: right;
          letter-spacing: -0.0975rem;
          color: ${(props) => props.theme['gray-150']};
          background: ${(props) => props.theme['blue-600']};
          padding: 1rem 3.56rem;
          color: var(--gray-150, #fbfbfb);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.56rem;

          &:hover {
            background: ${(props) => props.theme['yellow-dark']};
          }
        `

      case 'disabled':
        return css`
          background: ${(props) => props.theme['gray-300']};
          color: ${(props) => props.theme['base-text']};
          background: ${(props) => props.theme['base-button']};
          padding: 0.915rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;

          color: ${(props) => props.theme['gray-150']};
          font-size: 1.5rem;
          line-height: normal;
          text-align: right;
          font-weight: 700;
          letter-spacing: -0.0975rem;

          &:hover {
            background: ${(props) => props.theme['base-hover']};
          }
        `
    }
  }}
`

export { Btn }
