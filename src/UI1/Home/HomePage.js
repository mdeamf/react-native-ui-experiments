import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';

import Header from './Components/Header';
import User from './Components/User';
import Search from './Components/Search';
import Services from './Components/Services';
import Actions from './Components/Actions';

const HomePage = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{padding: 24}}>
        <Header />
        <User />
        <Search />
        <Services />
        <Actions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
