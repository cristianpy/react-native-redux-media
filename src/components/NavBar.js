import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class NavBar extends Component {

    render() {
      let render;
      let titleConfig = this.props.title
      let rightButtonConfig = this.props.rightButton
      let leftButtonConfig = this.props.leftButton
      if (rightButtonConfig) {
        render =  ( 
            <NavigationBar
              title={titleConfig}
              rightButton={rightButtonConfig}
              leftButton={leftButtonConfig}
            /> 
        )
      } else {
        render = ( 
            <NavigationBar
              title={titleConfig}
              leftButton={leftButtonConfig}
            /> 
        )
      }
      return (
        <View style={styles.navBar}>
            {render}
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
  