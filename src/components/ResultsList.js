import React from 'react'
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'


const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
            <ResultsDetail result={item} />
          </TouchableOpacity>
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
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
})

export default withNavigation(ResultsList)
