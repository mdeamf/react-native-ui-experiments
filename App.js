/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import HomePage from './src/UI1/HomePage';
import TransactionPage from './src/UI1/TransactionPage';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({navigation}) => ({
            contentStyle: {
              backgroundColor: '#ffffff',
            },
            headerHideShadow: true,
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#eeeeee',
                  padding: 8,
                  borderRadius: 50,
                }}
                onPress={() => navigation.goBack()}>
                <FontAwesomeIcon
                  icon={['fas', 'chevron-left']}></FontAwesomeIcon>
              </TouchableOpacity>
            ),
          })}>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Transaction" component={TransactionPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
