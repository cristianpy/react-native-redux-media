import React, { Component } from 'react';
import {View, Text} from 'react-native'
import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import SignUp from './SignUp';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import Workspace from './Workspace';
import CreateProject from './CreateProject';
import UserDetail from './UserDetail';

import {StackNavigator} from 'react-navigation';


const AppNavigator  = StackNavigator({
  Login: { screen: LoginScreen },
  SecondScreen: { screen: SecondScreen },
  SignUp: { screen: SignUp },
  SignUpStep1: { screen: SignUpStep1 },
  SignUpStep2: { screen: SignUpStep2 },
  SignUpStep3: { screen: SignUpStep3 },
  Workspace: { screen: Workspace },
  CreateProject: { screen: CreateProject },
  UserDetail: { screen: UserDetail},
},
{
	initialRouteName: 'Login',
	headerMode: 'none'
});

export default () => <AppNavigator />;