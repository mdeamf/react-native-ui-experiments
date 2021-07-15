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

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {useState} from 'react';
import UI1Nav from './src/UI1/UI1Nav';

library.add(fab, fas, far);

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />

      <UI1Nav />
    </SafeAreaProvider>
  );
};

export default App;
