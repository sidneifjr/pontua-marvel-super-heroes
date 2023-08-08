import { Btn } from './styles'

interface IButton {
  children?: React.ReactNode // a intenção é permitir a inserção de strings ou outras tags, como "strong".
  variant: string
  onClick?: unknown
  type: string
}

export const Button = (props: IButton) => {
  return (
    <Btn type={props.type} variant={props.variant} onClick={props.onClick}>
      {props.children}
    </Btn>
  )
}
