import { createStackNavigator } from 'react-navigation-stack';
import { ScheduleList } from '../screens/Schedule';
import { ScheduleDetails } from '../screens/ScheduleDetails';

export const ScheduleNavigator = createStackNavigator({
  ScheduleList,
  ScheduleDetails,
});
