import React, { Component } from 'react';
import {View, Text} from 'react-native'
import Login from './auth/Login';
import LoginStep1 from './auth/LoginStep1';
import SignUp from './auth/SignUp';
import SignUpStep1 from './auth/SignUpStep1';
import SignUpStep2 from './auth/SignUpStep2';
import SignUpStep3 from './auth/SignUpStep3';
import Workspace from './Workspace';
import CreateProject from './CreateProject';
import UserDetail from './UserDetail';

import {StackNavigator} from 'react-navigation';


const AppNavigator  = StackNavigator({
  Login: { screen: Login },
  LoginStep1: { screen: LoginStep1 },
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