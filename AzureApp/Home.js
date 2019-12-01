import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Dashboard from 'react-native-dashboard';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';

import Temp from './Temp'



export default class Home extends Component {
  static navigationOptions = {
    title: 'DASHBOARD',
    headerTintColor: '#FFF',

    headerStyle: { backgroundColor: '#1c313a', borderBottom:10, },
    headerTitleStyle: { color: '#FFF', fontWeight: 'bold' },
  };  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flexDirection: 'row' , backgroundColor: '#455a64'}}>
      <View style={{flex:1 , marginBottom:40, backgroundColor: '#455a64'}} >

        <TouchableOpacity   style={styles.button} onPress={() => navigate('Temp', {name: 'Temp'})}>
        <Icon name="thermometer" size={60} style={styles.Icon}  />
        <Text style={styles.textStyle}>Temperature</Text></TouchableOpacity>

        <TouchableOpacity   style={styles.button} onPress={() => navigate('Map', {name: 'Map'})}>
        <Icon3 name="location" size={60} style={styles.Icon2}  />
        <Text style={styles.textStyle2}>Location</Text></TouchableOpacity>

        <TouchableOpacity   style={styles.button}  onPress={() => navigate('Vibration', {name: 'Vibration'})}>
         <Icon2 name="wall" size={60} style={styles.Icon2}  />

        <Text style={styles.textStyle}>Wall Integrity</Text></TouchableOpacity>
      </View>

      <View style={{flex:1, backgroundColor: '#455a64' }} >
        <TouchableOpacity   style={styles.button2} onPress={() => navigate('Detect', {name: 'Detect'})}>
        <Icon2 name="account-alert" size={60} style={styles.Icon}  />

        <Text style={styles.textStyle2}>Detection</Text></TouchableOpacity>


        <TouchableOpacity   style={styles.button2} onPress={() => {}}>
        <Icon3 name="bar-graph" size={60} style={styles.Icon2}  />

        <Text style={styles.textStyle3}>Status</Text></TouchableOpacity>

        <TouchableOpacity   style={styles.button2} onPress={() => {}}>
        <Icon2 name="alert" size={60} style={styles.Icon3}  />

        <Text style={styles.textStyle3}>Alert</Text></TouchableOpacity>

      </View>
    </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
  },
  button: {
    alignItems: 'baseline',
    backgroundColor: '#1c313a',
    height: 170,
    borderColor: '#455a64',

    borderWidth: 2,

  },
  button2: {
    alignItems: 'baseline',
    backgroundColor: '#1c313a',
    height: 170,
    borderColor: '#455a64',
    borderWidth: 2,

  },
  textStyle:{
     textAlign: 'auto',
     color : '#FFF',
     fontSize : 20,
     marginTop: 20,
     marginLeft:32,
  },
  textStyle2:{
     textAlign: 'auto',
     color : '#FFF',
     fontSize : 20,
     marginTop: 20,
     marginLeft:52,
  },
  textStyle3:{
     textAlign: 'auto',
     color : '#FFF',
     fontSize : 20,
     marginTop: 20,
     marginLeft:62,
  },
 
  Icon:{
     textAlign: 'center',
     color : '#FFF',
     marginLeft : 70,
     marginTop : 30,
  },
  Icon2:{
     textAlign: 'center',
     color : '#FFF',
     marginLeft : 60,
     marginTop : 30,
  },
   Icon3:{
     textAlign: 'center',
     color : '#FFF',
     marginLeft : 60,
     marginTop : 30,
  }
});