import { StyleSheet } from 'react-native';

export const header_style_mobile = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'pink',
    borderWidth: '1px',
    width: '100%',
  },
  list_li: {
    flexDirection: 'row',
  },
});

export const header_style_tablet = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: '1px',
    width: '100%',
  },
  list_li: {
    flexDirection: 'row',
  },
});

export const header_style_laptop = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: '1px',
    width: '100%',
  },
  list_li: {
    flexDirection: 'row',
  },
});

export const header_style_desktop = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'blue',
    borderWidth: '1px',
    width: '100%',
  },
  list_li: {
    flexDirection: 'row',
  },
});

export const header_style_large = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'red',
    borderWidth: '1px',
    width: '100%',
  },
  list_li: {
    flexDirection: 'row',
    gap: '10px'
  },
});
