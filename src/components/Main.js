import React, { Component } from 'react';
import {View, Text} from 'react-native'
import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';

import {StackNavigator} from 'react-navigation';


const AppNavigator  = StackNavigator({
  Login: { screen: LoginScreen },
  SecondScreen: { screen: SecondScreen },
},
{
	initialRouteName: 'Login',
	headerMode: 'none'
});

export default () => <AppNavigator />;