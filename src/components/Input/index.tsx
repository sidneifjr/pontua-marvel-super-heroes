import { Input } from './styles'

interface IInputField {
  text?: string
  type: string
  placeholder: string
  className?: string
}

export const InputField = (props: IInputField) => {
  return (
    <>
      <Input
        className={props.className}
        {...props}
      />
      {props.text && <span>{props.text}</span>}
    </>
  )
}
