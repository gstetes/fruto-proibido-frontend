import React from 'react';

import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';

import { ThemeProvider } from './contexts/theme';
import { ProductsProvider } from './contexts/Products';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ProductsProvider>
        <>
          <StatusBar style='light' translucent={false}/>
          <Home />
        </> 
      </ProductsProvider>
    </ThemeProvider>
  );
};

export default App;
