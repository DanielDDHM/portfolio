import { StyleSheet } from 'react-native';

const default_dark = {
  container: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  body: {
    backgroundColor: 'white',
  },
  mb0: {
    padding: '10px',
    borderWidth: '1px',
    borderBottomColor: 'black',
  },
};

export const appStyles = StyleSheet.create({
  Mobile: { ...default_dark },
  Tablet: { ...default_dark },
  Laptop: { ...default_dark },
  Desktop: { ...default_dark },
  Large: { ...default_dark },
});
