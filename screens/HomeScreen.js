import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    console.log("Beyonce loving")
    console.log("homeScr--props: ", this.props)
    console.log("homeScr--params: ", typeof this.props.navigation.state.params)
    return (

      <View style={styles.container}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/howtofocusimg.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>Home</MonoText>
            </View>

            <Text style={styles.getTitle}>
              Forever Focused!!
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Carpe Diem</Text>
            </TouchableOpacity>
          </View>

          {/* <Text>{this.props.navigation.state.params && this.props.navigation.state.params.priority1}</Text>
            <Text style={styles.importanceDisplay}>{this.props.navigation.state.params && 'Importance: '}{this.props.navigation.state.params && this.props.navigation.state.params.importanceA}{'\n'}{'\n'}</Text>

            <Text>{this.props.navigation.state.params && this.props.navigation.state.params.priority2}</Text>

          <Text style={styles.importanceDisplay}>{this.props.navigation.state.params && 'Importance: '}{this.props.navigation.state.params && this.props.navigation.state.params.importanceB}</Text>  */}

          {
            this.props.navigation.state.params && this.props.navigation.state.params.importanceA > this.props.navigation.state.params.importanceB ?
              <View>
                <Text style={styles.importanceDisplay}>
                  {this.props.navigation.state.params.priority1}{'\n'}{this.props.navigation.state.params && 'Importance: '}{this.props.navigation.state.params && this.props.navigation.state.params.importanceA}{'\n'}{'\n'}</Text>
                <Text style={styles.importanceDisplay}>{this.props.navigation.state.params && this.props.navigation.state.params.priority2}{'\n'}{this.props.navigation.state.params && 'Importance: '}{this.props.navigation.state.params && this.props.navigation.state.params.importanceB}

                </Text>
              </View>

              :
              <View>
                <Text style={styles.importanceDisplay}>{this.props.navigation.state.params && this.props.navigation.state.params.priority2}{'\n'}{this.props.navigation.state.params && 'Importance: '}{this.props.navigation.state.params && this.props.navigation.state.params.importanceB}{'\n'}{'\n'}

                </Text>
                <Text style={styles.importanceDisplay}>
                  {this.props.navigation.state.params &&this.props.navigation.state.params.priority1}{'\n'}{this.props.navigation.state.params && 'Importance: '}{this.props.navigation.state.params && this.props.navigation.state.params.importanceA}{'\n'}{'\n'}</Text>
              </View>
          }

        </ScrollView>

        {/* <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

            <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
              <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
            </View>
          </View> */}

      </View>

    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn to Prioritize
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          'Decide what you want, decide what you are willing to exchange for it. Establish your priorities and go to work' - H. L. Hunt {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://www.liquidplanner.com/blog/how-to-prioritize-work-when-everythings-1/');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF99'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getTitle: {
    fontSize: 34,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 32,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 20,
    color: '#570674',
  },
  importanceDisplay: {
    textAlign: 'center',
  },
});
