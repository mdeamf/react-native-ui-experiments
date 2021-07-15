import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menu} onPress={() => console.log('test')}>
        <FontAwesomeIcon size={18} color="#0e43a1" icon={['fas', 'bars']} />
      </TouchableOpacity>

      <View style={styles.user}>
        <TouchableOpacity onPress={() => console.log('test')}>
          <FontAwesomeIcon
            style={styles.userNotifications}
            size={24}
            color="#0e43a1"
            icon={['far', 'bell']}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('test')}>
          <Image
            style={styles.userAvatar}
            source={{uri: 'https://i.pravatar.cc/300'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#eeeeee',
    padding: 16,
    borderRadius: 50,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userNotifications: {
    marginRight: 32,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default Header;
