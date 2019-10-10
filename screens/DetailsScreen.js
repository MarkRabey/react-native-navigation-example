import React from 'react';
import { View, Text, Button } from 'react-native';

export const DetailsScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={ () => props.navigation.navigate('Home') } />
    </View>
  );
}


DetailsScreen.navigationOptions = {
  title: 'Details'
};