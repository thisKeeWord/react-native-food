import React, { useState } from 'react'
import { StyleSheet, View, Button, FlatList, Text } from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, error] = useResults()


  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      {error ? (
        <Text style={styles.errorStyle}>{error}</Text>
      ) : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricier" />
      <ResultsList title="Big Spender" />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff'
  },
  errorStyle: {
    color: 'red',
  }
})

export default SearchScreen
