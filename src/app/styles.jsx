import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  Mobile: [
    {
      backgroundColor: '#2c3333',
      color: 'white',
      padding: '0',
      margin: '0',
    },
  ],
  Tablet: [{ backgroundColor: 'blue', height:'100%' }],
  Laptop: [{ backgroundColor: 'yellow', height:'100%' }],
  Desktop: [{ backgroundColor: 'green', height:'100%' }],
  Large: [{ backgroundColor: 'gray', height:'100%' }],
});
