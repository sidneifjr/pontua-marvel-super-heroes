import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@100;300;400;500;600;700;800;900&family=Inter:wght@100;300;400;500;600;700;900&display=swap');

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  mark,
  a,
  button,
  div,
  body,
  header,
  main,
  section,
  footer,
  aside,
  article,
  figure,
  figcaption,
  ul,
  ol,
  li,
  img,
  form,
  input,
  label,
  select,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  textarea,
  fieldset {
    margin: 0;
    padding: 0;
  }

  fieldset {
    border: 0;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  label,
  input,
  textarea,
  select,
  button[type="button"],
  button[type="submit"] {
    font-family: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    height: auto;
    max-width: 100%;
    display: block;
  }

  html,
  body {
    min-height: 100vh;
  }

  body {
    font-family: "Epilogue", sans-serif;
    background: ${(props) => props.theme.background};
  }

  main {
    min-height: 100vh;
    padding-left: 16rem;
    position: relative;
    display: flex;
  }
`
