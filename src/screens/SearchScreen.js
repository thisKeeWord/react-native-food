import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, error] = useResults()

  const filterResultsByPrice = () => {
    return results.filter((result) => result.price === price)
  }

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
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
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
