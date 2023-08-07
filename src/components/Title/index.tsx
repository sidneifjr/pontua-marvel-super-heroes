import { H1 } from './styles';

interface ITitle {
  children: React.ReactNode // a intenção é permitir a inserção de strings ou outras tags, como "strong".
}

export const Title = (props:ITitle) => {
  return (
    <H1>{props.children}</H1>
  );
};
