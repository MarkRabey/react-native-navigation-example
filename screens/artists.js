import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { IconButton } from '../component/Button';

export const ArtistList = (props) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Artist List</Text>
      <Button
        title="Go to Details"
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