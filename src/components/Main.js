import React, { Component } from 'react';
import {View, Text} from 'react-native'
import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import SignUp from './SignUp';

import {StackNavigator} from 'react-navigation';


const AppNavigator  = StackNavigator({
  Login: { screen: LoginScreen },
  SecondScreen: { screen: SecondScreen },
  SignUp: { screen: SignUp },
},
{
	initialRouteName: 'Login',
	headerMode: 'none'
});

export default () => <AppNavigator />;