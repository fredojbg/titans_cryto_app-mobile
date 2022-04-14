import {ColorSchemeName} from 'react-native';
import {DefaultTheme} from 'styled-components';

// Para adicionar novas properties va em @types no arquivo StyleSheet.d.ts

export const LightTheme: DefaultTheme = {
  colors: {
    text: '#424656',
    placeHolderText: '#B3B5BB',
    background: '#FFFFFF',
    backgroundAlternative: '#F7F8F8',
    primary: '#1B232A',
    secondary: '#595959',
    disabledColor: '#f0f0f1',
    cancel: '#FE3B59',
    border: 'rgba(66, 70, 86, 0.16)',
    activeBorder: '#D4CDFC',
    disabledBorder: '#d2d3d6',
    svgOutline: '#424656',
  },
};
export const DarkTheme: DefaultTheme = {
  colors: {
    text: '#FFFFFF',
    placeHolderText: '#B3B5BB',
    background: '#1a1a1a',
    backgroundAlternative: '#292929',
    primary: '#7962F7',
    secondary: '#595959',
    disabledColor: '#595959',
    cancel: '#FE3B59',
    border: '#525668',
    activeBorder: '#D4CDFC',
    disabledBorder: '#d2d3d6',
    svgOutline: '#FFFFFF',
  },
};

export default function getTheme(currentTheme: ColorSchemeName | null) {
  return currentTheme === 'dark' ? DarkTheme : LightTheme;
}
