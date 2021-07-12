/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomePage from './src/UI1/HomePage';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <HomePage />
    </SafeAreaProvider>
  );
};

export default App;
