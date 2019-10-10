import React from 'react';

export const ArtistDetails = (props) => {
  const artist = props.navigation.getParam('artist');
  
  if (artist) {
    return (
      <View>
        <Text>{ artist.name }</Text>
        <Text>{ artist.bio }</Text>
      </View>
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

ArtistDetails.navigationOptions = ({ navigation }) => {
  return {
    title: 'Artists',
  }
}