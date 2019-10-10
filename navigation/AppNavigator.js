import { createDrawerNavigator } from 'react-navigation-drawer';
import { ArtistNavigator } from './ArtistNavigator';
import { ScheduleNavigator } from './ScheduleNavigator';

export const AppNavigator = createDrawerNavigator({
  Artists: ArtistNavigator,
  Schedule: ScheduleNavigator,
});