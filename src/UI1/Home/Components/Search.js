import React from 'react';
import {StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';

const Search = () => {
  const [search, setSearch] = React.useState('');

  return (
    <SearchBar
      placeholder="Pesquisar..."
      value={search}
      onChangeText={text => setSearch(text)}
      lightTheme="true"
      round="true"
      containerStyle={styles.searchBar}
      inputContainerStyle={styles.searchBarInput}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 0,
    marginTop: 24,
  },
  searchBarInput: {
    backgroundColor: '#eeeeee',
  },
});

export default Search;
