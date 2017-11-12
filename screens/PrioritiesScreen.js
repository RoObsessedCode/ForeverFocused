import React, { Component } from 'react';
import { AsyncStorage, View, ScrollView, StyleSheet, Text, TextInput, Button } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import TimePicker from 'react-native-simple-time-picker'
import { ExpoLinksView } from '@expo/samples';

export default class PrioritiesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {

      fieldA: '',
      fieldB: '',
      importanceA: 0,
      importanceB: 0

    }
    this.setFieldA = this.setFieldA.bind(this)
    //this.setFieldB = this.setFieldB.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
  componentDidMount() {
    return AsyncStorage.getItem('fieldA')
      .then((value) => this.setState({ 'fieldA': value }))

  }

  setFieldA(value) {
    AsyncStorage.setItem('fieldA', value)
    this.setState({ 'fieldA': value })
  }

  // setFieldB(value) {
  //   AsyncStorage.setItem('fieldB', value)
  //   this.setState({ 'fieldB': value })
  // }

  static navigationOptions = {
    title: 'Priorities',
  }

  onChangeText(value, fieldName) {
    this.setState({ [fieldName]: value })

  }

  onSubmit() {
    this.setState({ fieldA: '', fieldB: '' })
  }

  render() {
    console.log("nav: ", this.props.navigation)
    const { navigate } = this.props.navigation

    //console.log("props: ", this.props)

    const numTextFieldInputs = 3
    let textFields = ["fieldA", "fieldB", "fieldC"]
    const passion = "Today I reach for my DREAMS by..."
    const { selectedHoursA, selectedMinutesA, selectedHoursB, selectedMinutesB, selectedHoursC, selectedMinutesC } = this.state

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.prioritiesTitle}>PRIORITIES</Text>

          <View style={styles.priContainer}>
            <Text style={styles.timeDisplay}>{selectedHoursA}:{selectedMinutesA}</Text>

            <ModalDropdown style={styles.importanceDisplay} defaultValue={"Importance: "} options={[0, 1, 2, 3, 4, 5]} onSelect={(level) => this.setState({ importanceA: level})}/>

            <TextInput style={styles.textField}
              placeholder={passion}
              value={this.state.fieldA}
              onChangeText={this.setFieldA}
              onSubmitEditing={this.onSubmitFieldA}
            />

            <TimePicker style={styles.timeScroller}
              selectedHours={selectedHoursA}
              selectedMinutes={selectedMinutesA}
              onChange={(hours, minutes) => this.setState({ selectedHoursA: hours, selectedMinutesA: minutes })}
            />

          </View>

          <View style={styles.priContainer}>
            <Text style={styles.timeDisplay}>{selectedHoursB}:{selectedMinutesB}</Text>
            <ModalDropdown style={styles.importanceDisplay} defaultValue={"Importance: "} options={[0, 1, 2, 3, 4, 5]} onSelect={(level) => this.setState({ importanceB: level})}/>

            <TextInput style={styles.textField}
              placeholder={passion}
              value={this.state.fieldB}
              onChangeText={(value) => this.onChangeText(value, 'fieldB')}
              //onChangeText={this.setFieldB}
              onSubmitEditing={this.onSubmitFieldB}

            />

            <TimePicker style={styles.timeScroller}
              selectedHours={selectedHoursB}
              selectedMinutes={selectedMinutesB}
              onChange={(hours, minutes) => this.setState({ selectedHoursB: hours, selectedMinutesB: minutes })}
            />

          </View>

        </View>
        <Button
          //onPress={this.onSubmit}
          onPress={() => navigate('Home', { priority1: this.state.fieldA, priority2: this.state.fieldB, importanceA: this.state.importanceA, importanceB: this.state.importanceB  })}
          title="Remind Me"
          color="#570674"

          accessibilityLabel="Learn more about this purple button"
        />
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
    backgroundColor: '#FFFF99',

  },
  priContainer: {
    display: 'flex',
    height: 290
  },
  prioritiesTitle: {
    fontSize: 32,
    color: '#663399',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  textField: {
    //flex: 1,
    marginLeft: 25,
    marginRight: 25,
    padding: 5,
    backgroundColor: '#7ec0ee',// '#DDA0DD',//'#FFFF99', //'#1e90ff'
    borderRadius: 25,

  },
  timeScroller: {
  },

  timeDisplay: {
    textAlign: 'center',
  },
  importanceDisplay: {
    //textAlign: 'left',
  },
})
