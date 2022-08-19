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
    borderWidth: '3px',
    borderBottomColor: '#6b5b95',
    minHeight: '300px',
  },
};

export const appStyles = StyleSheet.create({
  Mobile: { ...default_dark },
  Tablet: { ...default_dark },
  Laptop: { ...default_dark },
  Desktop: { ...default_dark },
  Large: { ...default_dark },
});
