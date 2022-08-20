import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export function AboutButtons({ link, icon }) {
    return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <View style={Button.container}>
        <FontAwesome name={icon} color={'#CFB53B'} size={30}></FontAwesome>
      </View>
    </TouchableOpacity>
  );
}

const Button = StyleSheet.create({
  container: {
    borderColor: '#CFB53B',
    borderWidth: '1px',
    borderRadius: '3px',
    padding: '5px',
  },
});
