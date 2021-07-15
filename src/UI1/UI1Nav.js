import React, {useState, useRef} from 'react';

import {View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './HomePage';
import TransactionPage from './TransactionPage';

enableScreens();
const Stack = createStackNavigator();

const StackScreenOptionsCard = {
  cardStyle: {
    backgroundColor: '#ffffff',
  },
  cardStyleInterpolator: ({current, layouts}) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  }),
  cardOverlay: () => <View style={{flex: 1, backgroundColor: 'transparent'}} />,
};

const StackScreenOptionsHeader = (navigation, route) => ({
  headerStyle: {
    backgroundColor: route?.params?.color || 'transparent',
    elevation: 0,
    borderBottomColor: 'transparent',
    shadowColor: 'transparent',
  },
  headerLeft: () => (
    <HeaderContent navigation={navigation} icon="chevron-left" />
  ),
  headerTitle: null,
  headerRight: () => <HeaderContent navigation={navigation} icon="bell" />,
});

const HeaderBase = props => {
  return (
    <TouchableOpacity
      style={{
        margin: 24,
      }}
      onPress={() => props.navigation.goBack()}>
      {props.children}
    </TouchableOpacity>
  );
};

const HeaderContent = props => {
  return (
    <HeaderBase {...props}>
      <FontAwesomeIcon
        color="white"
        size={20}
        icon={['fas', props.icon]}></FontAwesomeIcon>
    </HeaderBase>
  );
};

const UI1Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({navigation, route}) => ({
          ...StackScreenOptionsCard,
          ...StackScreenOptionsHeader(navigation, route),
        })}>

        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Transaction"
          component={TransactionPage}
          initialParams={{
            color: '#2f26d9',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UI1Nav;
