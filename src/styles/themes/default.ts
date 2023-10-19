export const defaultTheme = {
  // Base
  white: '#FFFFFF',
  black: '#000000',
  divider: '#ebeff2',
  'blue-200': '#747d94',
  'blue-500': '#293D71',
  'blue-600': '#213770',
  'blue-800': '#00113d',

  'orange-400': '#f43724',
  'orange-500': '#f21a05',
  'orange-700': '#F21A05',

  'gray-100': '#eaecf0',
  'gray-150': '#FBFBFB',
  'gray-200': '#EAECF0',
  'gray-250': '#f5f6f8',
  'gray-300': '#C3C3C3',
  'gray-400': '#B7B7B7',
  'gray-500': '#777777',
  'gray-600': '#717171',
} as const // avisa ao TypeScript que a variável nunca vai mudar; assim, ele "confia" que pode exibir o hex da cor na snapshot do VSCode (ctrl+space).
