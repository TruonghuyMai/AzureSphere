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

//import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  static navigationOptions = {
    header: null,

  };  
	render() {
    const {navigate} = this.props.navigation;

		return(
			<View style={styles.container}>
				<Logo/>
        <Form type="Signup"/>
				<TouchableOpacity style={styles.button}  onPress={() => navigate('Login', {name: 'Login'})}>
        <Text style={styles.buttonText}>Register</Text> 
        </TouchableOpacity> 
        <View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity ><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
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
    marginVertical: 1,
    paddingVertical: 15,
    marginBottom: 60
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});