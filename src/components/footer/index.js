import { StyleSheet, Text, View } from 'react-native';

export function Footer() {
  return (
    <View style={footer.container}>
      <Text style={footer.text}>{'\u00A9'} Daniel Machado</Text>
    </View>
  );
}

const footer = StyleSheet.create({
  container: { alignItems: 'center' },
  text: {
    color: 'white',
    fontSize: 15,
    height: '100px',
    height: 'fit-content',
  },
});
