import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TextInput, PickerIOS } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const PickerItemIOS = PickerIOS.Item
export default class PrioritiesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {

      fieldA: '',
      fieldB: '',
      fieldC: '',
      hourOptionA: ''

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
          <PickerIOS
            selectedValue={this.state.hourOptionA}
            onValueChange={(value) => this.setState({ hourOptionA: value })}
            >
            <PickerItemIOS label={"1"} value={"1"} />
            <PickerItemIOS label={"2"} value={"2"} />
            <PickerItemIOS label={"3"} value={"3"} />
            <PickerItemIOS label={"4"} value={"4"} />
            <PickerItemIOS label={"5"} value={"5"} />
            <PickerItemIOS label={"6"} value={"6"} />
            <PickerItemIOS label={"7"} value={"7"} />
            <PickerItemIOS label={"8"} value={"8"} />
            <PickerItemIOS label={"9"} value={"9"} />
            <PickerItemIOS label={"10"} value={"10"} />
            <PickerItemIOS label={"11"} value={"11"} />
            <PickerItemIOS label={"12"} value={"12"} />
          </PickerIOS>
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
    borderRadius: 25
  }
})
