import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import TimePicker from 'react-native-simple-time-picker'
import { ExpoLinksView } from '@expo/samples';

export default class PrioritiesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {

      fieldA: '',
      fieldB: '',
      fieldC: '',
      selectedHoursA: 0,
      selectedMinutesA: 0,
      selectedHoursB: 0,
      selectedMinutesB: 0,
      selectedHoursC: 0,
      selectedMinutesC: 0,

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
    const { selectedHoursA, selectedMinutesA, selectedHoursB, selectedMinutesB, selectedHoursC, selectedMinutesC } = this.state

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.prioritiesTitle}>PRIORITIES</Text>

          <View style={styles.priContainer}>
            <Text style={styles.timeDisplay}>{selectedHoursA}:{selectedMinutesA}</Text>
            <TextInput style={styles.textField}
              placeholder={passion}
              value={this.state.fieldA}
              onChangeText={(value) => this.onChangeText(value, 'fieldA')}
            />

            <TimePicker style={styles.timeScroller}
              selectedHours={selectedHoursA}
              selectedMinutes={selectedMinutesA}
              onChange={(hours, minutes) => this.setState({ selectedHoursA: hours, selectedMinutesA: minutes })}
            />

          </View>

          <View style={styles.priContainer}>
            <Text style={styles.timeDisplay}>{selectedHoursB}:{selectedMinutesB}</Text>
            <TextInput style={styles.textField}
              placeholder={passion}
              value={this.state.fieldB}
              onChangeText={(value) => this.onChangeText(value, 'fieldB')}
            />

            <TimePicker style={styles.timeScroller}
              selectedHours={selectedHoursB}
              selectedMinutes={selectedMinutesB}
              onChange={(hours, minutes) => this.setState({ selectedHoursB: hours, selectedMinutesB: minutes })}
            />

          </View>
          {/* <View style={styles.priContainer}>
            <Text style={styles.timeDisplay}>{selectedHoursC}:{selectedMinutesC}</Text>
            <TextInput style={styles.textField}
              placeholder={passion}
              value={this.state.fieldC}
              onChangeText={(value) => this.onChangeText(value, 'fieldC')}
            />

            <TimePicker style={styles.timeScroller}
              selectedHours={selectedHoursC}
              selectedMinutes={selectedMinutesC}
              onChange={(hours, minutes) => this.setState({ selectedHoursC: hours, selectedMinutesC: minutes })}
            />

          </View> */}

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
    justifyContent: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
    height: 600,

  },
  priContainer: {
    display: 'flex',
    height: 290
  },
  prioritiesTitle: {
    fontSize: 32,
    color: '#570674',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  textField: {
    //flex: 1,
    marginLeft: 25,
    marginRight: 25,
    padding: 5,
    backgroundColor: '#1e90ff',
    borderRadius: 25,

  },
  timeScroller: {
  },
  // timeContainer: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  timeDisplay: {
    textAlign: 'center'
  },
})
