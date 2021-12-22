import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import ResultsDetail from './ResultsDetail'


const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <ResultsDetail result={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: bold,
    marginLeft: 15,
    marginBottom: 5
  }
})

export default ResultsList
