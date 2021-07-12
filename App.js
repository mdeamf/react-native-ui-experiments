/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, StatusBar, Text} from 'react-native';
import HomePage from './src/UI1/HomePage';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <HomePage />
    </SafeAreaView>
  );
};

export default App;
