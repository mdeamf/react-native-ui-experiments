import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const User = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo</Text>
      <Text style={styles.name}>Maurício Meira</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'OpenSans-Light',
    color: '#737e9a'
  },
  name: {
    fontSize: 32,
    fontFamily: 'OpenSans-Regular',
    color: '#000f11'
  }
})

export default User;
