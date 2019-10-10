import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container } from '../component/Container';

export const ArtistDetails = (props) => {
  const artist = props.navigation.getParam('artist');

  if (artist) {
    return (
      <Container>
        <Image
          source= {{ uri: artist.image }}
          style={{ width: 4, height: 200 }}
        />
        <Text>{ artist.name }</Text>
        <Text>{ artist.bio }</Text>
      </Container>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Artist Details</Text>
    </View>
  );
}

ArtistDetails.navigationOptions = ({ navigation }) => {
  const artist = navigation.getParam('artist');
  
  return {
    title: artist ? artist.name : 'No Artist',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
  }
};
