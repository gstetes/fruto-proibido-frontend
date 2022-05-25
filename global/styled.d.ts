import 'styled-components';
import theme from './themes/dark';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {};
};