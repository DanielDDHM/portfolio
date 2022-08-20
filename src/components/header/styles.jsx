import { StyleSheet } from 'react-native';

export const default_header = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#CFB53B',
    borderWidth: '1px',
    width: '100%',
    padding: '20px',
  },
  photo:{
    width: '100px', height: '100px' 
  },
  list_li: {
    flexDirection: 'row',
    gap: '50px',
    padding: '25px',
  },
  btn_li: {
    fontSize: 40,
    borderWidth: '1px',
    borderColor: '#CFB53B',
    padding: '20px',
    borderRadius: '3px',
    textAlign: 'center',
    maxHeight: 55,

    shadowOffset: { width: 2, height: 5 },
    shadowColor: '#CFB53B',
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  txt_li: {
    color: 'white',
  },
  dropdown: {
    borderColor: '#CFB53B',
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
  ...default_header,
});

export const header_style_desktop = StyleSheet.create({
  ...default_header,
});

export const header_style_large = StyleSheet.create({
  ...default_header,
});
