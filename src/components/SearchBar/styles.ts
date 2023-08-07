import styled from 'styled-components'

export const SearchBox = styled.form`
  width: 100%;
`

export const SearchBoxField = styled.fieldset`
  position: relative;
  border-bottom: solid 0.0625rem ${(props) => props.theme.divider};

  label {
    font-size: 0.75rem;
    line-height: normal;
    font-weight: 500;
    letter-spacing: -0.0225rem;
    color: ${(props) => props.theme['blue-200']};
    position: absolute;
    top: 50%;
    left: 2.31rem;
    pointer-events: none;
    transform: translate3d(0, -50%, 0);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 1.37rem 2rem 1.6rem 4.25rem;
    border: none;
    display: block;
  }
`
