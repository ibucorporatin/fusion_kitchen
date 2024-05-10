import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StoreProvider from './src/store/wrapper/StoreProvider';
import AuthenticationManager from './src/navigation/AuthenticationManager';
const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <AuthenticationManager />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
