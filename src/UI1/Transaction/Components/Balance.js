import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Balance = () => {
  return (
    <View style={styles.balance}>
      <Text style={styles.balanceLabel}>Seu Saldo</Text>
      <Text style={styles.balanceValue}>R$ 20.123,45</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balance: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  balanceLabel: {
    color: '#dddddd',
    fontFamily: 'OpenSans-Light',
    fontSize: 24,
  },
  balanceValue: {
    color: 'white',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 32,
  },
});

export default Balance;
