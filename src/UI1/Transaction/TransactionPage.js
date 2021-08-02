import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, View, Text} from 'react-native';

import Balance from './Components/Balance';
import Deposits from './Components/Deposits';

const TransactionPage = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#2f26d9',
          flex: 1,
        }}>
        <Balance />
        <Deposits />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
            }}>
            <Text>Teste</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TransactionPage;
