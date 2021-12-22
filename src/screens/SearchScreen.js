import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, error] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price)
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? (
        <Text style={styles.errorStyle}>{error}</Text>
      ) : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
  }
})

export default SearchScreen
