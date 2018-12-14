//Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import MomentList from './src/components/MomentList';

//Create a component
const App = () => (
    //To handle the scroll in IOS
    <View style={{ flex: 1 }}>
      <Header headerText={'Madan Weds Priya'} />
      <MomentList />
    </View>
  );

//Render it to the device
AppRegistry.registerComponent('ClickMoments', () => App);
