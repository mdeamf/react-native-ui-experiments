import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const items = [
  {
    icon: ['fas', 'university'],
    key: 'Falar c/ Gerente',
    color: '#5bdcfb',
  },
  {
    icon: ['fas', 'money-check-alt'],
    key: 'Pagar conta',
    color: '#2f26d9',
  },
];

const Actions = () => {
  return (
    <View style={{marginTop: 16}}>
      <Text style={styles.title}>Ações rápidas</Text>

      <View style={styles.actionsContainer}>
        {items.map(item => (
          <TouchableOpacity key={item.key} style={styles.actionsButton}>
            <View style={styles.actionsIcon(item)}>
              <FontAwesomeIcon color="white" icon={item.icon} />
            </View>
            <Text style={styles.actionsDescription}>{item.key}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'OpenSans-Light',
    color: '#737e9a',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 8,
    justifyContent: 'space-around',
  },
  actionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    width: '45%',
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 8,
  },
  actionsIcon: (item) => ({
    backgroundColor: item.color,
    justifyContent: 'center',
    marginRight: 8,
    padding: 8,
    borderRadius: 50,
  }),
  actionsDescription: {
    color: '#000f11',
    fontFamily: 'OpenSans-SemiBold',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default Actions;
