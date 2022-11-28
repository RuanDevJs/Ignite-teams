import { IconProps } from 'phosphor-react-native';
import theme from '.';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {};
}
