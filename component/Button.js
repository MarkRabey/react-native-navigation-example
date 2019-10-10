import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import themeVariables from '../theme/variables';

export const Button = props => {
  return (
    <View style={ styles.container }>
      <TouchableOpacity onPress={ props.onPress }>
        <Text style={ styles.title }>{ props.title }</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeVariables.primary,
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '900'
  },
});