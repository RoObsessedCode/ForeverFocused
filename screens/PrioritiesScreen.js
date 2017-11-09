import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class PrioritiesScreen extends React.Component {
  static navigationOptions = {
    title: 'Priorities',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.prioritiesTitle}>PRIORITIES</Text>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  prioritiesTitle: {
    fontSize: 32,
    color: '#570674',
    textAlign: 'center'
  }
})
