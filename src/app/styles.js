import { StyleSheet } from 'react-native';

const default_dark = {
  container: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  body: {
    backgroundColor: 'black',
  },
  mb0: {
    padding: '10px',
    borderWidth: '1px',
    borderBottomColor: '#CFB53B',
    minHeight: '400px',
  },
};

export const appStyles = StyleSheet.create({
  Mobile: { ...default_dark },
  Tablet: { ...default_dark },
  Laptop: { ...default_dark },
  Desktop: { ...default_dark },
  Large: { ...default_dark },
});
