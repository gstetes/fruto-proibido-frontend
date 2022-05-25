import * as React from "react";
import darkTheme from '../../global/themes/dark';
import { ThemeProvider as StyledProvider } from "styled-components";
import { AsyncStorage } from "react-native";

const ThemeContext = React.createContext({
  theme: darkTheme,
  isDark: true,
});

export type ReactProps = {
  children?: React.ReactElement;
};

const ThemeProvider: React.FC<ReactProps> = (props) => {
  const [theme, setTheme] = React.useState<any>(darkTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        isDark: true
      }}
      {...props}
    >
      {/* @ts-ignore */}
      <StyledProvider theme={theme}>{props.children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useTheme };
