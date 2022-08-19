import { StyleSheet } from 'react-native';

const default_header = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#6b5b95',
    borderWidth: '2px',
    width: '100%',
    padding: '20px',
  },
  list_li: {
    flexDirection: 'row',
    gap: '50px',
    padding: '25px',
  },
  btn_li: {
    fontSize: 40,
    borderWidth: '1px',
    borderColor: '#6b5b95',
    padding: '20px',
    borderRadius: '3px',
    textAlign: 'center',
    maxHeight: 55,

    shadowOffset: { width: 2, height: 5 },
    shadowColor: '#6b5b95',
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  txt_li: {
    color: 'white',
    fontFamily: 'Comic Sans',
  },
  dropdown: {
    borderColor: '#6b5b95',
    borderWidth: '1px',
    borderRadius: '5px',
    padding: '10px',
  },
};

export const header_style_mobile = StyleSheet.create({
  header: {
    ...default_header.header,
  },
  list_li: {
    display: 'none',
  },
  dropdown: { ...default_header.dropdown },
});

export const header_style_tablet = StyleSheet.create({
  header: {
    ...default_header.header,
  },
  list_li: {
    display: 'none',
  },
  dropdown: { ...default_header.dropdown },
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
