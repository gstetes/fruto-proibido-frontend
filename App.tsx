import React from 'react';

import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';

import darkTheme from './global/themes/dark';
import { ThemeProvider } from './contexts/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <>
        <StatusBar style='auto'/>
        <Home />
      </>      
    </ThemeProvider>
  );
};

export default App;
