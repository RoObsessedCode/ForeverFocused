import React from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class PrioritiesScreen extends React.Component {
  constructor() {
    super()
    this.state = {

      fieldA: '',
      fieldB: '',
      fieldC: ''

    }
    this.onChangeText = this.onChangeText.bind(this)

  }
  static navigationOptions = {
    title: 'Priorities',
  }

  onChangeText(value, fieldName) {
    this.setState({ [fieldName]: value })

  }

  render() {
    const numTextFieldInputs = 3
    let textFields = ["fieldA", "fieldB", "fieldC"]
    const passion = "Today I will get closer to my DREAMS by..."
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.prioritiesTitle}>PRIORITIES</Text>
          <TextInput style={styles.textField}
            placeholder={passion}
            value={this.state.fieldA}
            onChangeText={(value) => this.onChangeText(value, 'fieldA')}

          />
          <TextInput style={styles.textField}
            placeholder={passion}
            value={this.state.fieldB}
            onChangeText={(value) => this.onChangeText(value, 'fieldB')}
          />
          <TextInput  style={styles.textField}
            placeholder={passion}
            value={this.state.fieldC}
            onChangeText={(value) => this.onChangeText(value, 'fieldC')}
          />

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  //check out border radius
  container: {
    //flex: 1,
    //resizeMode: 'contain',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 15,
    backgroundColor: '#fff',
    height: 600,

  },
  prioritiesTitle: {
    fontSize: 32,
    color: '#570674',
    textAlign: 'center'
  },
  textField: {
    flex: 1,
    margin: 10,
    backgroundColor: '#1e90ff',
    borderRadius: 25
  }
})
