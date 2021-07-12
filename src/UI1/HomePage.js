import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Text} from 'react-native';
import Header from './Header';

const HomePage = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{padding: 24}}>
        <Header />
        <Text>Bem-vindo</Text>
        <Text>Maurício Meira</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
