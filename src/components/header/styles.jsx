import { StyleSheet } from 'react-native';

const default_header = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#6b5b95',
    borderWidth: '2px',
    width: '100%',
    padding: '20px',
  },
  list_li: {
    flexDirection: 'row',
    gap: '10px',
    padding: '25px',
  },
  btn_li: {
    fontSize: 30,
    borderWidth: '1px',
    borderColor: '#6b5b95',
    padding: '10px',
    borderRadius: '3px',
    textAlign: 'center',
    maxHeight: 42,
  },
  txt_li: {
    color: 'white',
  },
};

export const header_style_mobile = StyleSheet.create({
  header: {
    ...default_header.header,
  },
  list_li: {
    display: 'none',
  },
  dropdown: {},
});

export const header_style_tablet = StyleSheet.create({
  header: {
    ...default_header.header,
  },
  list_li: {
    display: 'none',
  },
  dropdown: {},
});

export const header_style_laptop = StyleSheet.create({
  header: {
    ...default_header.header,
  },
  list_li: {
    ...default_header.list_li,
  },
  btn_li: {
    ...default_header.btn_li,
  },
  txt_li: {
    ...default_header.txt_li,
  },
});

export const header_style_desktop = StyleSheet.create({
  header: {
    ...default_header.header,
  },
  list_li: {
    ...default_header.list_li,
  },
  btn_li: {
    ...default_header.btn_li,
  },
  txt_li: {
    ...default_header.txt_li,
  },
});

export const header_style_large = StyleSheet.create({
  header: {
    ...default_header.header,
  },
  list_li: {
    ...default_header.list_li,
  },
  btn_li: {
    ...default_header.btn_li,
  },
  txt_li: {
    ...default_header.txt_li,
  },
});
