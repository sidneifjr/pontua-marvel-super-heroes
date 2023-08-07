import { H3 } from './styles';

interface ITitleXS {
  children: React.ReactNode // a intenção é permitir a inserção de strings ou outras tags, como "strong".
}

export const TitleXS = (props:ITitleXS) => {
  return (
    <H3>{props.children}</H3>
  );
};
