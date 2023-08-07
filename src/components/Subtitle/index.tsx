import { H2 } from './styles';

interface ISubtitle {
  children: React.ReactNode
}

export const Subtitle = (props:ISubtitle) => {
  return (
    <H2>{props.children}</H2>
  );
};
