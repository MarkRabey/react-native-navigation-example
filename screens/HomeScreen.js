import React from 'react';
import { View, Text, Button } from 'react-native';

export const Home = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={ () => props.navigation.navigate('DetailsScreen') } />
    </View>
  );
}

Home.navigationOptions = {
  title: 'Home'
};