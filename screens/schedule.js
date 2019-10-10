import React from 'react';
import { View, Text, Button } from 'react-native';

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

ScheduleList.navigationOptions = {
  title: 'Schedules'
}

export const ScheduleDetails = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Schedule Details</Text>
    </View>
  );
}