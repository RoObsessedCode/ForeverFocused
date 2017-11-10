import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import TimePicker from 'react-native-simple-time-picker'
import { ExpoLinksView } from '@expo/samples';

export default class PrioritiesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {

      fieldA: '',
      fieldB: '',
      fieldC: '',
      selectedHours: 0,
      selectedMinutes: 0,

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
    const { selectedHours, selectedMinutes} = this.state

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.prioritiesTitle}>PRIORITIES</Text>
          <TextInput style={styles.textField}
            placeholder={passion}
            value={this.state.fieldA}
            onChangeText={(value) => this.onChangeText(value, 'fieldA')}
          />
          <View style={styles.timeContainer}>

            <TimePicker
              selectedHours = {selectedHours}
              selectedMinutes = {selectedMinutes}
              onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes})}
            />
            <Text style={styles.timeDisplay}>{selectedHours}:{selectedMinutes}</Text>

          </View>

          <TextInput style={styles.textField}
            placeholder={passion}
            value={this.state.fieldB}
            onChangeText={(value) => this.onChangeText(value, 'fieldB')}
          />

          <TextInput style={styles.textField}
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
    borderRadius: 25,
    margin: 40
  },
  timeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeDisplay: {
    // flex: 1,
    // height: 25,
    // padding: 5,
  },
})
