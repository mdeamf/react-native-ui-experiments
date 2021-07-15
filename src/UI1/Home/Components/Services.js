import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const items = [
  {
    icon: ['fas', 'coins'],
    key: 'Transações',
    color: '#01cd88',
    info: '7 pagamentos',
    route: 'Transaction',
  },
  {
    icon: ['fas', 'hand-holding-usd'],
    key: 'Conta',
    color: '#ff5949',
    info: '4 serviços',
  },
  {
    icon: ['fas', 'star'],
    key: 'Pontos',
    color: '#e7a849',
    info: '250 pontos',
  },
  {
    icon: ['fas', 'credit-card'],
    key: 'Cartões',
    color: '#2f26d9',
    info: '3 cartões',
  },
];

const Services = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {items.map(item => (
        <TouchableOpacity
          key={item.key}
          onPress={() =>
            item.route ? navigation.navigate(item.route) : console.log('test')
          }
          style={styles.serviceItem(item)}>
          <View>
            <View style={styles.serviceIcon}>
              <FontAwesomeIcon size={18} color={item.color} icon={item.icon} />
            </View>
            <Text style={styles.serviceTitle}>{item.key}</Text>
            <Text style={styles.serviceInfo}>{item.info}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  serviceItem: item => ({
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '25%',
    padding: 16,
    margin: 16,
    backgroundColor: item.color,
    borderRadius: 8,
  }),
  serviceIcon: {
    alignSelf: 'flex-start',
    padding: 12,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  serviceTitle: {
    color: '#fff',
    marginTop: 8,
    fontFamily: 'OpenSans-Regular',
  },
  serviceInfo: {
    color: '#fff',
    opacity: 0.6,
    fontSize: 11,
    fontFamily: 'OpenSans-SemiBold',
  },
});

export default Services;
