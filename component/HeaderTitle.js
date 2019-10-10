import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import themeVaraibles from '../theme/variables';

export const HeaderTitle = props => {
  return (
    <View>
      <Text style={ styles.title }>
        { props.title }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: themeVaraibles.primary,
    fontSize: 36,
  }
})
