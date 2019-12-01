
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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Pulse from 'react-native-pulse';

export default class Vibration extends Component {
 static navigationOptions = {
    title: 'WALL BREACH DETECTION',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1c313a', borderBottom:10 },
    headerTitleStyle: { color: '#FFF', fontWeight: 'bold' },
  };  

constructor (props) {
    super(props)
    this.state = {
        text: 'No Vibration',
        color: '#0984e3',
        Time: 0,
    } 
  }

componentDidMount(){
  var date = new Date();
  var counter = 0;


 

  setInterval(() => {

    var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours   = date.getHours();
    var string1 = hours.toString() + ":"  + minutes.toString() + ":" + seconds.toString();

    if(counter == 4){
      var string =  'High Vibration : Possible Breach';
      this.setState({text: string});
      this.setState({color: '#d63031'});

  }

  if(counter == 7){
      var string =  'No Vibration';
      this.setState({text: string});
      this.setState({color: '#0984e3'});
      counter = 0;

  }
  this.setState({Time: string1});

  counter++;
  }, 2000);

}
  render() {
    return (

      <View style={styles.container}>

        <TouchableOpacity style={{backgroundColor:this.state.color, width:300, height: 140, borderRadius:25, marginTop:10, }} onPress={() => navigate('Home', {name: 'Home'})} >
          <Text style={styles.buttonText}>{this.state.text}</Text> 
        </TouchableOpacity> 


      </View>
    );
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
    height:200,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 15,
    marginBottom: 50
  },
  buttonText: {
    marginTop:30,
    fontSize:30,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});