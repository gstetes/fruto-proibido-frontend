import React from 'react';

import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';

import { ThemeProvider } from './contexts/theme';
import { ProductsProvider } from './contexts/Products';
import { ScreenProvider } from './contexts/Screen';
import { View } from 'react-native';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ScreenProvider>
        <ProductsProvider>
          <View style={{ flex: 1 }}>
            <StatusBar style='dark' translucent={false}/>
            <Home />
          </View> 
        </ProductsProvider>
      </ScreenProvider>
    </ThemeProvider>
  );
};

export default App;
