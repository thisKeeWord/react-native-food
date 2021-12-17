import React, { useState } from 'react'
import { StyleSheet, View, Button, FlatList, Text } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')


  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('yo')}
      />
      <Text>Search Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff'
  }
})

export default SearchScreen
