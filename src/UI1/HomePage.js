import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Text} from 'react-native';
import Header from './Header';
import User from './User';

const HomePage = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{padding: 24}}>
        <Header />
        <User />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
