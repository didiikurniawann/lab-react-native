/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackGround
} from 'react-native';
import Judul from './Components/Judul';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
    <View style={styles.container} >
    <Judul/>
    <Judul title="BIODATA"/>
    <Judul title="PROFILE"/>
    <Text style={styles.welcome}>
     Nama = Didi Kurniawan
    </Text>
    
    <Text style={styles.welcome}>
     Kelas = XI RPL 3 
    </Text>

    <Text style={styles.welcome}>
     No Absen = 14 
    </Text>
    <Image source={require('./fotodidi.jpg')} style={{width: 300, height: 300}}/>


    

  </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7675',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#192a56',
    marginBottom: 5,
  },
});
