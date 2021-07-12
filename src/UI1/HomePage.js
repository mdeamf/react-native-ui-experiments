import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Text} from 'react-native';

const HomePage = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{padding: 24}}>
        <Text>Bem-vindo</Text>
        <Text>Maurício Meira</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
