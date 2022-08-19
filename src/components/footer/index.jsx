import { StyleSheet, Text, View } from 'react-native';

export function Footer() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={footerTextStyle.text}>{'\u00A9'} Daniel Machado</Text>
    </View>
  );
}

const footerTextStyle = StyleSheet.create({
  text: { color: 'white', fontSize: 15, height: '100px' },
});
