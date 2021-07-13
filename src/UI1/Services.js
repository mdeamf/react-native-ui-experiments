import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const items = [
  {
    icon: ['fas', 'coins'],
    key: 'Transações',
    color: '#01cd88',
  },
  {
    icon: ['fas', 'hand-holding-usd'],
    key: 'Conta',
    color: '#ff5949',
  },
  {
    icon: ['fas', 'star'],
    key: 'Pontos',
    color: '#e7a849',
  },
  {
    icon: ['fas', 'credit-card'],
    key: 'Cartões',
    color: '#2f26d9',
  },
];

const Services = () => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 16}}>
      {items.map(item => (
        <TouchableOpacity
          onPress={() => console.log('test')}
          style={{
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: '25%',
            padding: 16,
            margin: 16,
            backgroundColor: item.color,
            borderRadius: 8,
          }}>
          <View>
            <View
              style={{
                alignSelf: 'flex-start',
                padding: 12,
                borderRadius: 50,
                backgroundColor: 'white',
              }}>
              <FontAwesomeIcon size={18} color={item.color} icon={item.icon} />
            </View>
            <Text
              style={{
                color: '#fff',
                marginTop: 8,
                fontFamily: 'OpenSans-Regular',
              }}>
              {item.key}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Services;
