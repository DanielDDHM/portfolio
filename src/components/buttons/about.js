import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {default_colors}  from '../../constants' 


export function AboutButtons({ link, icon }) {
    return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <View style={Button.container}>
        <FontAwesome name={icon} color={default_colors.secondary} size={30}></FontAwesome>
      </View>
    </TouchableOpacity>
  );
}

const Button = StyleSheet.create({
  container: {
    borderColor: default_colors.secondary,
    borderWidth: '1px',
    borderRadius: '3px',
    padding: '5px',
  },
});
