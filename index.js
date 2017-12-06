import 'expo'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import rootReducer from './src/reducers';

import Main from './src/components/Main';

const store = createStore(
  rootReducer,
  applyMiddleware(
      thunkMiddleware
  )
);

export default class loginAnimation extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
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
