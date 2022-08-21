import { StyleSheet } from 'react-native';
import { default_colors } from '../../constants';

export const header_style_mobile = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: default_colors.secondary,
    borderWidth: 1,
    width: '100%',
    padding: 20,
  },
  photo: {
    width: 100,
    height: 100,
  },
  list_li: {
    display: 'none',
  },
  btn_li: {
    fontSize: 40,
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 20,
    borderRadius: 3,
    textAlign: 'center',
    maxHeight: 55,

    shadowOffset: { width: 2, height: 5 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  txt_li: {
    color: default_colors.texts,
  },
  dropdown: {
    borderColor: default_colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export const header_style_tablet = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: default_colors.secondary,
    borderWidth: 1,
    width: '100%',
    padding: 20,
  },
  photo: {
    width: 100,
    height: 100,
  },
  list_li: {
    display: 'none',
  },
  btn_li: {
    fontSize: 40,
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 20,
    borderRadius: 3,
    textAlign: 'center',
    maxHeight: 55,

    shadowOffset: { width: 2, height: 5 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  txt_li: {
    color: default_colors.texts,
  },
  dropdown: {
    borderColor: default_colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export const header_style_laptop = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: default_colors.secondary,
    borderWidth: 1,
    width: '100%',
    padding: 20,
  },
  photo: {
    width: 100,
    height: 100,
  },
  list_li: {
    flexDirection: 'row',
    padding:50,
    padding: 25,
  },
  btn_li: {
    fontSize: 40,
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 20,
    borderRadius: 3,
    textAlign: 'center',
    maxHeight: 55,

    shadowOffset: { width: 2, height: 5 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  txt_li: {
    color: default_colors.texts,
  },
});

export const header_style_desktop = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: default_colors.secondary,
    borderWidth: 1,
    width: '100%',
    padding: 20,
  },
  photo: {
    width: 100,
    height: 100,
  },
  list_li: {
    flexDirection: 'row',
    padding:50,
    padding: 25,
  },
  btn_li: {
    fontSize: 40,
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 20,
    borderRadius: 3,
    textAlign: 'center',
    maxHeight: 55,

    shadowOffset: { width: 2, height: 5 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  txt_li: {
    color: default_colors.texts,
  },
});

export const header_style_large = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: default_colors.secondary,
    borderWidth: 1,
    width: '100%',
    padding: 20,
  },
  photo: {
    width: 100,
    height: 100,
  },
  list_li: {
    flexDirection: 'row',
    padding:50,
    padding: 25,
  },
  btn_li: {
    fontSize: 40,
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 20,
    borderRadius: 3,
    textAlign: 'center',
    maxHeight: 55,

    shadowOffset: { width: 2, height: 5 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  txt_li: {
    color: default_colors.texts,
  },
});
