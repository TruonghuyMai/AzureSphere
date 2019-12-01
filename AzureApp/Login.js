import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from './components/Logo';
import Form from './components/Form';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


export default class Login extends Component<{}> {
  static navigationOptions = {
    header: null,
  }; 
	render() {
    const {navigate} = this.props.navigation;

		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Login" />
        <TouchableOpacity style={styles.button} onPress={() => navigate('Home', {name: 'Home'})} >
          <Text style={styles.buttonText}>Login</Text> 
        </TouchableOpacity> 
				
        <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity  onPress={() => navigate('Signup', {name: 'Signup'})}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 15,
    marginBottom: 50
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});