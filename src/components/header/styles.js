import { StyleSheet } from 'react-native';
import {default_colors}  from '../../constants' 

export const header_style_mobile = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: default_colors.secondary,
    borderWidth: '1px',
    width: '100%',
    padding: '20px',
  },
  photo: {
    width: '100px',
    height: '100px',
  },
  list_li: {
    display: 'none',
  },
  btn_li: {
    fontSize: 40,
    borderWidth: '1px',
    borderColor: default_colors.secondary,
    padding: '20px',
    borderRadius: '3px',
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
    borderWidth: '1px',
    borderRadius: '5px',
    padding: '10px',
  },
});

export const header_style_tablet = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: default_colors.secondary,
    borderWidth: '1px',
    width: '100%',
    padding: '20px',
  },
  photo: {
    width: '100px',
    height: '100px',
  },
  list_li: {
    display: 'none',
  },
  btn_li: {
    fontSize: 40,
    borderWidth: '1px',
    borderColor: default_colors.secondary,
    padding: '20px',
    borderRadius: '3px',
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
    borderWidth: '1px',
    borderRadius: '5px',
    padding: '10px',
  },
});

export const header_style_laptop = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: default_colors.secondary,
    borderWidth: '1px',
    width: '100%',
    padding: '20px',
  },
  photo: {
    width: '100px',
    height: '100px',
  },
  list_li: {
    flexDirection: 'row',
    gap: '50px',
    padding: '25px',
  },
  btn_li: {
    fontSize: 40,
    borderWidth: '1px',
    borderColor: default_colors.secondary,
    padding: '20px',
    borderRadius: '3px',
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
    borderWidth: '1px',
    width: '100%',
    padding: '20px',
  },
  photo: {
    width: '100px',
    height: '100px',
  },
  list_li: {
    flexDirection: 'row',
    gap: '50px',
    padding: '25px',
  },
  btn_li: {
    fontSize: 40,
    borderWidth: '1px',
    borderColor: default_colors.secondary,
    padding: '20px',
    borderRadius: '3px',
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
    borderWidth: '1px',
    width: '100%',
    padding: '20px',
  },
  photo: {
    width: '100px',
    height: '100px',
  },
  list_li: {
    flexDirection: 'row',
    gap: '50px',
    padding: '25px',
  },
  btn_li: {
    fontSize: 40,
    borderWidth: '1px',
    borderColor: default_colors.secondary,
    padding: '20px',
    borderRadius: '3px',
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
