import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder'

// Color palettes inspired by the provided color map
const primaryPalette = [
  '#CCFFF9', '#99FFFA', '#66F9FF', '#3FEAFF', '#00D0FF', '#00A2DB', '#007AB7', '#005793', '#003E7A'
];
const successPalette = [
  '#F3FCCE', '#E4F99F', '#CCED6C', '#B0DC47', '#8BC613', '#71AA0D', '#598E09', '#437206', '#345F03'
];
const infoPalette = [
  '#D6DEFF', '#ADBDFF', '#859AFF', '#667FFF', '#3452FF', '#263EDB', '#1A2CB7', '#101D93', '#09137A'
];
const warningPalette = [
  '#FEF6D3', '#FEEAA8', '#FEDB7D', '#FDCD5D', '#FDB528', '#D9931D', '#B67414', '#92570C', '#794307'
];
const dangerPalette = [
  '#FFCCCF', '#FF99AA', '#FF668E', '#FF3F85', '#ff0077', '#DB007C', '#B7007A', '#930071', '#7A006A'
];
const basicPalette = [
  '#FFFFFF', '#F5F5F5', '#EBEBEB', '#E0E0E0', '#B3B3B3', '#838383', '#636363', '#000', '#000', '#1B1B1B', '#0d0d0d'
];

const lightPalette = [
  ...primaryPalette,
  ...successPalette,
  ...infoPalette,
  ...warningPalette,
  ...dangerPalette,
  ...basicPalette,
];
const darkPalette = [...lightPalette]; // For now, use the same for both

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
}

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
}


const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },
    extra: {
      light: {
        colorPrimary100: '#CCFFF9',
        colorPrimary200: '#99FFFA',
        colorPrimary300: '#66F9FF',
        colorPrimary400: '#3FEAFF',
        colorPrimary500: '#00D0FF',
        colorPrimary600: '#00A2DB',
        colorPrimary700: '#007AB7',
        colorPrimary800: '#005793',
        colorPrimary900: '#003E7A',
        colorSuccess100: '#F3FCCE',
        colorSuccess200: '#E4F99F',
        colorSuccess300: '#CCED6C',
        colorSuccess400: '#B0DC47',
        colorSuccess500: '#8BC613',
        colorSuccess600: '#71AA0D',
        colorSuccess700: '#598E09',
        colorSuccess800: '#437206',
        colorSuccess900: '#345F03',
        colorInfo100: '#D6DEFF',
        colorInfo200: '#ADBDFF',
        colorInfo300: '#859AFF',
        colorInfo400: '#667FFF',
        colorInfo500: '#3452FF',
        colorInfo600: '#263EDB',
        colorInfo700: '#1A2CB7',
        colorInfo800: '#101D93',
        colorInfo900: '#09137A',
        colorWarning100: '#FEF6D3',
        colorWarning200: '#FEEAA8',
        colorWarning300: '#FEDB7D',
        colorWarning400: '#FDCD5D',
        colorWarning500: '#FDB528',
        colorWarning600: '#D9931D',
        colorWarning700: '#B67414',
        colorWarning800: '#92570C',
        colorWarning900: '#794307',
        colorDanger100: '#FFCCCF',
        colorDanger200: '#FF99AA',
        colorDanger300: '#FF668E',
        colorDanger400: '#FF3F85',
        colorDanger500: '#ff0077',
        colorDanger600: '#DB007C',
        colorDanger700: '#B7007A',
        colorDanger800: '#930071',
        colorDanger900: '#7A006A',
        colorBasic100: '#FFFFFF',
        colorBasic200: '#F5F5F5',
        colorBasic300: '#EBEBEB',
        colorBasic400: '#E0E0E0',
        colorBasic500: '#B3B3B3',
        colorBasic600: '#838383',
        colorBasic700: '#636363',
        colorBasic800: '#000',
        colorBasic900: '#000',
        colorBasic1000: '#1B1B1B',
        colorBasic1100: '#0d0d0d',
        colorBasicTransparent100: 'rgba(131, 131, 131, 0.08)',
        colorBasicTransparent200: 'rgba(131, 131, 131, 0.16)',
        colorBasicTransparent300: 'rgba(131, 131, 131, 0.24)',
        colorBasicTransparent400: 'rgba(131, 131, 131, 0.32)',
        colorBasicTransparent500: 'rgba(131, 131, 131, 0.40)',
        colorBasicTransparent600: 'rgba(131, 131, 131, 0.48)',
        colorBasicControlTransparent100: 'rgba(255, 255, 255, 0.08)',
        colorBasicControlTransparent200: 'rgba(255, 255, 255, 0.16)',
        colorBasicControlTransparent300: 'rgba(255, 255, 255, 0.24)',
        colorBasicControlTransparent400: 'rgba(255, 255, 255, 0.32)',
        colorBasicControlTransparent500: 'rgba(255, 255, 255, 0.40)',
        colorBasicControlTransparent600: 'rgba(255, 255, 255, 0.48)',
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        colorPrimary100: '#CCFFF9',
        colorPrimary200: '#99FFFA',
        colorPrimary300: '#66F9FF',
        colorPrimary400: '#3FEAFF',
        colorPrimary500: '#00D0FF',
        colorPrimary600: '#00A2DB',
        colorPrimary700: '#007AB7',
        colorPrimary800: '#005793',
        colorPrimary900: '#003E7A',
        colorSuccess100: '#F3FCCE',
        colorSuccess200: '#E4F99F',
        colorSuccess300: '#CCED6C',
        colorSuccess400: '#B0DC47',
        colorSuccess500: '#8BC613',
        colorSuccess600: '#71AA0D',
        colorSuccess700: '#598E09',
        colorSuccess800: '#437206',
        colorSuccess900: '#345F03',
        colorInfo100: '#D6DEFF',
        colorInfo200: '#ADBDFF',
        colorInfo300: '#859AFF',
        colorInfo400: '#667FFF',
        colorInfo500: '#3452FF',
        colorInfo600: '#263EDB',
        colorInfo700: '#1A2CB7',
        colorInfo800: '#101D93',
        colorInfo900: '#09137A',
        colorWarning100: '#FEF6D3',
        colorWarning200: '#FEEAA8',
        colorWarning300: '#FEDB7D',
        colorWarning400: '#FDCD5D',
        colorWarning500: '#FDB528',
        colorWarning600: '#D9931D',
        colorWarning700: '#B67414',
        colorWarning800: '#92570C',
        colorWarning900: '#794307',
        colorDanger100: '#FFCCCF',
        colorDanger200: '#FF99AA',
        colorDanger300: '#FF668E',
        colorDanger400: '#FF3F85',
        colorDanger500: '#ff0077',
        colorDanger600: '#DB007C',
        colorDanger700: '#B7007A',
        colorDanger800: '#930071',
        colorDanger900: '#7A006A',
        colorBasic100: '#FFFFFF',
        colorBasic200: '#F5F5F5',
        colorBasic300: '#EBEBEB',
        colorBasic400: '#E0E0E0',
        colorBasic500: '#B3B3B3',
        colorBasic600: '#838383',
        colorBasic700: '#636363',
        colorBasic800: '#000',
        colorBasic900: '#000',
        colorBasic1000: '#1B1B1B',
        colorBasic1100: '#0d0d0d',
        colorBasicTransparent100: 'rgba(131, 131, 131, 0.08)',
        colorBasicTransparent200: 'rgba(131, 131, 131, 0.16)',
        colorBasicTransparent300: 'rgba(131, 131, 131, 0.24)',
        colorBasicTransparent400: 'rgba(131, 131, 131, 0.32)',
        colorBasicTransparent500: 'rgba(131, 131, 131, 0.40)',
        colorBasicTransparent600: 'rgba(131, 131, 131, 0.48)',
        colorBasicControlTransparent100: 'rgba(255, 255, 255, 0.08)',
        colorBasicControlTransparent200: 'rgba(255, 255, 255, 0.16)',
        colorBasicControlTransparent300: 'rgba(255, 255, 255, 0.24)',
        colorBasicControlTransparent400: 'rgba(255, 255, 255, 0.32)',
        colorBasicControlTransparent500: 'rgba(255, 255, 255, 0.40)',
        colorBasicControlTransparent600: 'rgba(255, 255, 255, 0.48)',
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: primaryPalette,
      light: primaryPalette,
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: warningPalette,
        light: warningPalette,
      },
    },
    error: {
      palette: {
        dark: dangerPalette,
        light: dangerPalette,
      },
    },
    success: {
      palette: {
        dark: successPalette,
        light: successPalette,
      },
    },
    info: {
      palette: {
        dark: infoPalette,
        light: infoPalette,
      },
    },
  },
})

export type Themes = typeof builtThemes

// the process.env conditional here is optional but saves web client-side bundle
// size by leaving out themes JS. tamagui automatically hydrates themes from CSS
// back into JS for you, and the bundler plugins set TAMAGUI_ENVIRONMENT. so
// long as you are using the Vite, Next, Webpack plugins this should just work,
// but if not you can just export builtThemes directly as themes:
export const themes: Themes = (builtThemes as any)
