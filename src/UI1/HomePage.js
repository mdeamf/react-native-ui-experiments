import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';

import Header from './Header';
import User from './User';
import Search from './Search';
import Services from './Services';

const HomePage = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{padding: 24}}>
        <Header />
        <User />
        <Search />
        <Services />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
