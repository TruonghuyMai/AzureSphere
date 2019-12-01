import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home'
import Temp from './Temp'
import Login from './Login'
import Signup from './Signup'
import Map from './Map'
import Detect from './Detect'
import Vibration from './Vibration'

console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Signup: {screen: Signup},
  Home: {screen: Home},
  Temp: {screen: Temp},
  Map: {screen: Map},
  Detect: {screen: Detect},
  Vibration: {screen: Vibration}

});

const App = createAppContainer(MainNavigator);

export default App;

