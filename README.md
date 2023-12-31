# Pontua's Marvel Super Heroes

Projeto inspirado pela identidade visual da Pontua.

Essa aplicação deve ser criada com base e utilização na api fornecida pela Marvel (https://developer.marvel.com/)

Link para layout no Figma: https://www.figma.com/file/vpFeYEY1MKoR62lgybKF2b/Teste-de-Desenvolvimento-(Copy)?node-id=0%3A1&mode=dev

## Página de Login

- Eu como usuário:
  Irei inserir o meu e-mail e senha de acesso para navegar para a tela de Agentes.

- Quando eu:
  [x] - Clicar no botão entrar, se sucesso deverá navegar para a próxima tela, caso ocorra erro, ver uma notificação; informando que o email ou senha está inválido.

- Opcional
  [x] - Quando eu clicar deverá redirecionar para a tela de esqueci minha senha.

- Critérios de aceite
  [x] - Validação de e-mail e senha;
  [x] - Navegar para próxima página;
  [x] - Exibir mensagem de erro;
  [x] - Ser o mais fiel possível ao layout do Figma.

## Página de seleção de Agente

- Eu como usuário:
  Irei selecionar o agente de minha escolha para acessar a página de perfil do agente.

- Quando eu:
  [x] - Clicar no campo de escolha deverá ser exibido uma lista com os nomes e foto do perfil de cada agente, e ao clicar no botão entrar ser redirecionado para a tela de perfil do agente;

- Critérios de aceite
  [x] - Se não houver agente selecionado mostrar o placeholder "Selecione um agente" conforme Figma;
  [ ] - Se já existir um agente selecionado e eu clicar no campo de escolha, exibir a lista de agentes com uma flag no agente já selecionado;
  [x] - Ao clicar no botão entrar deverá navegar para a página de perfil do agente selecionado;
  [x] - Ser o mais fiel possível ao layout do Figma.

## Página de Perfil de Agente

- Eu como usuário:
  [x] - Ao acessar a tela preciso ver a aba de visão geral com o descritivo sobre o agente, bem como seu nome e imagem;
  [x] - Quero poder navegar nas abas de características, conforme layout do Figma;
  [x] - Preciso visualizar o menu com as opções de acessar a Home, Perfil e sair do sistema.

- Quando eu:
  [x] - Clicar em uma das abas disponíveis daquele agente, preciso ver uma lista com as informações
  daquela aba.

- Critérios de aceite
  [x] - Exibir as informações dos agentes;
  [x] - As abas do perfil devem ser dinâmicas de acordo com cada agente;
  [x] - Ao clicar nas abas mostrar as listagens com as informações relativas;
  [x] - Exibir o menu lateral com link para Home, Perfil e Logout;
  [x] - Ser o mais fiel possível ao layout do Figma;

## Página Home

- Eu como usuário:
  [x] - Desejo visualizar uma lista de cards com fotos de perfil e um resumo de personagens;
  [ ] - Quero poder navegar na lista pela paginação no final da página;
  [x] - Quando eu clicar no campo de pesquisa e digitar o nome do agente, me mostre somente os personagens que contém aquele termo buscado.

- Quando eu:
  [x] - Clicar no card do personagem, deverei ser redirecionado para a página de perfil do personagem escolhido;
  [x] - Fizer uma busca, o sistema deverá exibir na lista somente os personagens que contém aquele nome.
  [ ] - Clicar no botão "Próxima" deverá exibir os próximos cards da lista (próxima página);
  [ ] - Clicar no botão "Anterior" deverá exibir os cards anteriores da lista (página anterior);
  [ ] - Quando eu clicar no botão com número de páginação, exibir os cards relativos aquela página selecionada.

- Critérios de aceite
  [x] - Exibir resumo e foto de perfil;
  [x] - Listagem mínima de 11 personagens
  [x] - Exibição de no mínimo na primeira página
  [ ] - Exibição de no máximo 10 personagens por página;
  [x] - Ao clicar em um card ser redirecionado à página de perfil do mesmo;
  [ ] - Ser o mais fiel possível ao layout do Figma;

- Opcional

## Página Recuperação de Senha

Eu como usuário:
Irei inserir o email que realizei o cadastro na plataforma no campo disponivel e, clicarei no botão enviar link.

Quando eu:
[ ] - Clicar no botão de enviar link, deverá aparecer a mensagem de envio com sucesso.

- Critérios de aceite
  [ ] - Ser o mais fiel possível ao layout do Figma;

## Instruções específicas para o desenvolvimento frontend

- Orientações:
  A aplicação deverá ser construída em ReactJS e não há restrições na utilização de frameworks ou packages;

  O layout responsivo deverá ser responsivo para desktop;

  A(s) chamada(s) de login deverá ser mockadas e utilizar JWT para o token de acesso;

  A recuperação de senha também deverá ser mockada na aplicação.
  Opcional

  O menu também será dinâmico fornecido pelo backend de acordo com a restrição de acesso do
  usuário, sendo assim também deverá ter uma chamada mockada;

  Fazer o layout para visualização mobile de acordo com sua criatividade

- [x] Context API.
- [x] Exibir nome do herói atualmente selecionado, na aba "Perfil".
- [ ] Paginação com os itens exibidos em Home.
- [ ] JWT.

## Comandos

- Dev

`yarn run dev`

- Prod

`yarn run build`

- Testes E2E (Cypress)

`yarn run cy`

- Testes E2E - Headless

`yarn run cy:run`

## Aprendizado

1. Remoção automática de imports não-utilizados.

https://dev.to/bornfightcompany/easily-sort-imports-and-remove-unused-declarations-on-each-save-in-vs-code-35k1

2. Uso de async/await em um useEffect.

https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook

3. Embora o Zod permita uma melhor validação de tipagens além do alcance do TypeScript, surigram algumas falhas na integração com o React Hook Form.

4. A pattern de composition é uma opção viável para futuros projetos; buscar inspiração na estrutura do Radix UI.

5. Considerar uma biblioteca de UI ou semelhante, para agilizar o desenvolvimento (shadcn, por exemplo).

6. styled-components possui considerações sobre o runtime, portanto Stitches é uma melhor opção para futuros projetos; é importante notar que as APIs possuem relativamente poucas diferenças entre uma e outra, assim muito do que já existe é migrável.

7. Considerar a pattern de Polimorfismo, abordada em: https://www.youtube.com/watch?v=zhgbanI0UV8

8. https://stackoverflow.com/questions/71083110/vue-uncaught-referenceerror-process-is-not-defined

## Decisões

1. Embora o **pnpm** forneça um ganho de 2x na instalação de pacotes, o mesmo realizou uma instalação incompleta do Cypress e ocasionou quebras em outras bibliotecas. Portanto,
   decidi retornar ao yarn, por enquanto.

2. A API da Marvel possui uma característica peculiar: algumas entradas como "Spider-Man" exigem o hífen, porém outras como "Iron Man" necessitam de espaço. Aparentemente, isso é associado ao nome do herói em si.

3. Também em relação ao nome de cada herói, a API não exige capitalização, permitindo a realização da requisição sem falhas.

Por exemplo: "Aaron Stack" vs "aaron%20stack".

Porém, para manter uma melhor padronização, apliquei o tratamento de lowercase à URL.
