import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const leftButtonConfig = {
  title: 'Back',
  handler: () => alert('hello! Back'),
};

const titleConfig = {
  title: 'Some Title',
};

export default class NavBar extends Component {
    render() {
      return (
        <View style={styles.navBar}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={leftButtonConfig}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    navBar: {
      // flex: 1,
      // flexDirection: 'row'
      marginTop: 20,
    },
  });
  