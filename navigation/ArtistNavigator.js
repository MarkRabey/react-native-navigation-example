import { createStackNavigator } from 'react-navigation-stack';
import { ArtistList, ArtistDetails } from '../screens/artists';

export const ArtistNavigator = createStackNavigator({
  ArtistList,
  ArtistDetails,
});
