import { Container } from './styles';

interface IWrapper {
  children: React.ReactNode
}

// Se eu importar o Wrapper, não consigo aplicar estilos extras em outros componentes.
// Porém, se importar o Container diretamente, funciona sem problemas. (:)
export const Wrapper = (props:IWrapper) => {
  return (
    <Container>{props.children}</Container>
  );
};
