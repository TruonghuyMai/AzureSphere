import React, { Component } from "react";
import { Text, View, StyleSheet,Dimensions,TouchableOpacity } from "react-native";

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};



import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


var {height, width} = Dimensions.get('window');

export default class Temp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        number: 0,
        number1: 0,
        number2: 0,
        number3: 0,
        degree: 0,
        degree1: 0,
        degree2: 0,
        degree3: 0,


    } 
  }
  
  componentDidMount(){
  var date = new Date();
  setInterval(() => {
      
      var seconds = date.getSeconds();
      var minutes = date.getMinutes();
      var hours   = date.getHours();

      var seconds1 = seconds+1;
      var seconds2 = seconds+2;
      var seconds3 = seconds+3;

      var string = hours.toString() + ":"  + minutes.toString() + ":" + seconds.toString();
      var string1 = hours.toString() + ":"  + minutes.toString() + ":" + seconds1.toString();
      var string2 = hours.toString() + ":"  + minutes.toString() + ":" + seconds2.toString();
      var string3 = hours.toString() + ":"  + minutes.toString() + ":" + seconds3.toString();

      var Cnum = 27 + Math.random();
      var C = Cnum.toFixed(2);

      var C1 =  27 + Math.random();
      var C1 = C1.toFixed(2);

      var C2 =  27 + Math.random();
      var C2 = C2.toFixed(2);

      var C3 =  27 + Math.random();
      var C3 = C3.toFixed(2);

      this.setState({number: string});
      this.setState({number1: string1});
      this.setState({number2: string2});
      this.setState({number3: string3});
      this.setState({degree: C});
      this.setState({degree1: C1});
      this.setState({degree2: C2});
      this.setState({degree3: C3});

  }, 2000);

}
 static navigationOptions = {
    title: 'TEMPERATURE',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1c313a', borderBottom:10 },
    headerTitleStyle: { color: '#FFF', fontWeight: 'bold' },
  };  

  render() {
    return (
      <View style={{backgroundColor: '#455a64', flex:1}}>
        <LineChart
          data={{
            labels: [ this.state.number3, this.state.number2 , this.state.number1, this.state.number],
            datasets: [
              {
                data: [
                  this.state.degree3 ,
                  this.state.degree2 ,
                  this.state.degree1 ,
                  this.state.degree
                ]
              }
            ]
          }}
          width={width} // from react-native
          height={220}
          yAxisLabel={""}
          yAxisSuffix={"C"}
          chartConfig={{
            backgroundColor: "#1c313a",
          
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 40,
            borderRadius: 1,

          }}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigate('Home', {name: 'Home'})} >
          <Text style={styles.buttonText}> Time : {this.state.number}</Text> 
        </TouchableOpacity> 

        <TouchableOpacity style={styles.button} onPress={() => navigate('Home', {name: 'Home'})} >
          <Text style={styles.buttonText}> Degree : {this.state.degree} C</Text> 
        </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle:{
     textAlign: 'auto',
     color : '#FFF',
     fontSize : 20,
     marginTop: 10,
  },
  button: {
    width:width-30,
    height: 70,
    backgroundColor:'#1c313a',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 10,
    marginBottom: 10,
    marginLeft:15
  },
  buttonText: {
    fontSize:30,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});