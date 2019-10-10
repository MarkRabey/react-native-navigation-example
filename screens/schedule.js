import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from '../component/IconButton';
import { Button } from '../component/Button';

export const ScheduleList = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Schedule List</Text>
      <Button
        title="Go to details"
        onPress={ () => props.navigation.navigate('ScheduleDetails') }
      />
    </View>
  );
}

ScheduleList.navigationOptions = ({ navigation }) => {
  return {
    title: 'Schedules',
    headerLeft: (
      <IconButton
        name="menu"
        style={{ paddingLeft: 12 }}
        onPress={ () => navigation.openDrawer() } />
    )
  };
}
