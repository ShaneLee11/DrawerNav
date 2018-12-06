// Home.js is the homepage where you would see the map markers.

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';


class HomeScreen extends Component {

  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="home" style={{ fontSize: 24 }} />
          )
  }
  render() {
    return (
      <View>
        <Header>
          <Left>
           <Icon name="menu" onPress={() =>
           this.props.navigation.openDrawer()} />
          </Left>
        </Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent:
      'center' }}>
        <Text>This is the home screen where the map is to be found.
        with a List button, ScanQR button and location get button</Text>
      </View>
      </View>
      );
  }
}

export default HomeScreen;




// npm install native-base
// DrawerNavigator -> link to individual page - > npm install react-navigation@2.6.2 or 3.0 & npm install
//Mapview with markers -> link to backend api to show markers
//location button -> pull location finder from phone
//list Button -> link to list page
//ScanQR Button -> list to QR page
