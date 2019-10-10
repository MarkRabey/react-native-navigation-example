import { createStackNavigator } from 'react-navigation-stack';
import { ArtistList } from '../screens/Artists';
import { ArtistDetails } from '../screens/ArtistDetails';

export const ArtistNavigator = createStackNavigator({
  ArtistList,
  ArtistDetails,
});
