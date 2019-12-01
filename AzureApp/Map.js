import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet,  ScrollView, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MapView, {Marker} from 'react-native-maps';


var latitude =  37.78;
var longitude =  -122.43;

export default class Map extends React.Component {
  onRegionChange(region) {
    this.setState({ region });
  }
   static navigationOptions = {
    title: 'MAP',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1c313a', borderBottom:10 },
    headerTitleStyle: { color: '#FFF', fontWeight: 'bold' },
  };  

  render() {
    var mapStyle=[
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": 20
            },
            {
                "lightness": 50
            },
            {
                "gamma": 0.4
            },
            {
                "hue": "#00ffee"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#405769"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#232f3a"
            }
        ]
    }
];
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
        >
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Container'}
            description={'Latitude: '+ latitude + ', longitude: ' + longitude }
          />
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});
