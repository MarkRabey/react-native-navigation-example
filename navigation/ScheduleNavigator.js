import { createStackNavigator } from 'react-navigation-stack';
import { ScheduleList, ScheduleDetails } from '../screens/schedule';

export const ScheduleNavigator = createStackNavigator({
  ScheduleList,
  ScheduleDetails,
});
