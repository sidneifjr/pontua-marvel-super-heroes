import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme['orange-700']};
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  display: block;
`

export const LoginContentForm = styled.form`
  min-height: 27.0625rem;
  max-width: 23.75rem;
  background: ${(props) => props.theme.white};
  border-radius: 1.75rem;
  padding: 3.06rem 2.37rem 2.69rem 2.25rem;
  flex: 1;

  fieldset {
    position: relative;
    margin-bottom: 1.44rem;

    input {
      width: 100%;
      font-size: 1rem;
      line-height: normal;
      font-weight: 700;
      letter-spacing: -0.065rem;
      background: ${(props) => props.theme.white};
      border: 0.7px solid ${(props) => props.theme['gray-400']};
      border-radius: 0.625rem;
      padding: 1.25rem 0.94rem;
      color: ${(props) => props.theme['blue-500']};
      transition: border cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.25s;

      &:placeholder {
        color: ${(props) => props.theme['gray-400']};
      }

      &:focus {
        outline: 0.7px solid ${(props) => props.theme['blue-500']};
      }

      &.error {
        border: solid 0.7px ${(props) => props.theme['orange-700']};
      }
    }

    a {
      position: absolute;
      top: 50%;
      right: 0.94rem;
      transform: translate3d(0, -50%, 0);
    }
  }
`

export const LoginContentFormTitle = styled.h1`
  font-size: 2.25rem;
  line-height: normal;
  font-weight: 700;
  letter-spacing: -0.14625rem;
  text-align: right;
  color: ${(props) => props.theme['blue-600']};
  position: relative;
  margin-bottom: 1rem;
  display: inline-flex;

  span {
    color: ${(props) => props.theme['orange-500']};
  }
`

export const LoginContentFormDescription = styled.p`
  max-width: 19.375rem;
  font-size: 1rem;
  line-height: 127%;
  font-weight: 400;
  letter-spacing: -0.065rem;
  color: ${(props) => props.theme['gray-500']};
  margin-bottom: 0.37rem;
`

export const RecoverPassword = styled(Link)`
  font-size: 0.6875rem;
  line-height: normal;
  font-weight: 400;
  letter-spacing: -0.04469rem;
  text-align: right;
  color: ${(props) => props.theme['orange-700']};
  margin-top: 1.31rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
`
