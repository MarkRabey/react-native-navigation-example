import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from './Button';

export const ListItem = props => {
  return (
    <View>
      <Text>{ props.name }</Text>
      <Button
        title="Show Details"
        onPress={ props.onPress }
      />
    </View>
  );
}