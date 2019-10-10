import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Container } from '../component/Container';
import { IconButton } from '../component/IconButton';
import { Button } from '../component/Button';
import { HeaderTitle } from '../component/HeaderTitle';
import { ListItem } from '../component/ListItem';

export const ArtistList = (props) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    if (artists.length === 0) {
      fetch('https://thawing-hollows-21222.herokuapp.com/artists')
        .then(res => res.json())
        .then(({data}) => {
          setArtists(data);
        })
    }
  });
  
  return (
    <Container>
      <HeaderTitle title="Artist List" />
      <FlatList
        data={ artists }
        keyExtractor={ (item, index) => `item-${ index }`}
        renderItem={ ({ item }) => (
          <ListItem
            { ...item }
            onPress={() => {
              props.navigation.navigate('ArtistDetails', { artist: item })
            }}
          />
        ) }
      />
      {/* <Button
        title="Go to Details"

        onPress={ () => props.navigation.navigate('ArtistDetails', {
          artist: {
            name: 'An artist',
            bio: 'artist bio',
          }
        })}
      /> */}
    </Container>
  );
}



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