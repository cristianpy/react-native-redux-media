import React, { Component } from 'react';
import {View, Text} from 'react-native'
import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import SignUp from './SignUp';
import SignUpStep1 from './SignUpStep1';

import {StackNavigator} from 'react-navigation';


const AppNavigator  = StackNavigator({
  Login: { screen: LoginScreen },
  SecondScreen: { screen: SecondScreen },
  SignUp: { screen: SignUp },
  SignUpStep1: { screen: SignUpStep1 },
},
{
	initialRouteName: 'Login',
	headerMode: 'none'
});

export default () => <AppNavigator />;