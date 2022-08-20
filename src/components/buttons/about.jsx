import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';

export function AboutButtons({ link, icon }) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <View
        style={Button.container}
      >
        <FontAwesomeIcon icon={icon} color="#CFB53B" size={30} />
      </View>
    </TouchableOpacity>
  );
}

const Button = StyleSheet.create({
  container:{
    borderColor: '#CFB53B',
    borderWidth: '1px',
    borderRadius: '3px',
    padding: '5px',
  }
})