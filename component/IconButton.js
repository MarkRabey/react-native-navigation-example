import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const IconButton = ({ name, ...props }) => {
  return (
    <TouchableOpacity { ...props }>
      <MaterialIcons name={ name } size={ 32 } />
    </TouchableOpacity>
  )
}