import 'expo'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import Main from './src/components/Main';
import NavBar from './src/components/NavBar';

export default class loginAnimation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('main', () => loginAnimation);
