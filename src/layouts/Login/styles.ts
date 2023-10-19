import styled from 'styled-components'

export const Login = styled.section`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme['blue-800']};
  padding-top: 3.06rem;
  padding-right: 4.25rem;
  padding-bottom: 9.95rem;
  padding-left: 6.62rem;
  margin-left: -16rem;
  display: flex;
  flex-direction: column;
  gap: 4.25rem;
`

export const LoginContent = styled.div`
  padding-left: 3.63rem;
  gap: 8.75rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > img {
    height: 640px;
  }
`
