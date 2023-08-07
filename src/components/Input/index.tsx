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
        // type={props.text}
        // placeholder={props.placeholder}
        {...props}
      />
      {props.text && <span>{props.text}</span>}
    </>
  )
}
