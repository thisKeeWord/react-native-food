import React, { useState } from 'react'
import { StyleSheet, View, Button, FlatList, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const searchApi = async () => {
    error && setError('')

    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'los angeles'
        }
      })

      setResults(response.data.businesses)
    } catch (error) {
      setError('An error occurred. Please try again later.')
    }
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
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
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
