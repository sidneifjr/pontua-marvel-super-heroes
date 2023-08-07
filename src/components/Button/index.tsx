import { Btn } from './styles'

interface IButton {
  children?: React.ReactNode // a intenção é permitir a inserção de strings ou outras tags, como "strong".
  variant: string
  onClick?: any
}

export const Button = (props: IButton) => {
  return (
    <Btn variant={props.variant} onClick={props.onClick}>
      {props.children}
    </Btn>
  )
}
