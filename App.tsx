import React from 'react';

import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';

import { ThemeProvider } from './contexts/theme';
import { ProductsProvider } from './contexts/Products';
import { ScreenProvider } from './contexts/Screen';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ScreenProvider>
        <ProductsProvider>
          <>
            <StatusBar style='dark' translucent={false}/>
            <Home />
          </> 
        </ProductsProvider>
      </ScreenProvider>
    </ThemeProvider>
  );
};

export default App;
