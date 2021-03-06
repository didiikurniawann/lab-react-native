/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import Routes from './source/Routes';

export default class App extends Component<Props> {
  render() {
    return (
    <View style={styles.container} >
    <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
    </View>
    );
  }

}
const styles = StyleSheet.create({
  container : {
    flex: 1,


  },
});
