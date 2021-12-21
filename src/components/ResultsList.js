import React from 'react'
import { StyleSheet, View, Button, FlatList, Text, TextInput } from 'react-native'


const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: bold
  }
})

export default ResultsList
