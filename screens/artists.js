import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { IconButton } from '../component/Button';

export const ArtistList = (props) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Artist List</Text>
      <IconButton
        name="settings"
        onPress={ () => props.navigation.navigate('ArtistDetails', {
          artist: {
            name: 'An artist',
            bio: 'artist bio',
          }
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24
  }
})

ArtistList.navigationOptions = ({ navigation }) => {
  return {
    title: 'Artists',
    headerLeft: (
      <IconButton
        name="menu"
        style={{ paddingLeft: 12 }}
        onPress={ () => navigation.openDrawer() } />
    )
  }
}

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
    headerLeft: (
      <TouchableOpacity style={{ paddingLeft: 12 }} onPress={ () => navigation.openDrawer() }>
        <MaterialIcons name="menu" size={32} />
      </TouchableOpacity>
    )
  }
}