import { StyleSheet } from 'react-native';
import { default_colors } from '../../constants';

export const about_style_mobile = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 10,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignSelf: 'center',

    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,

    padding: 10,
  },
  title: { color: default_colors.texts, fontSize: 30 },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 5,
    alignSelf: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    alignSelf: 'center',
  },
  about: {
    width: '75%',
    borderColor: default_colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,
    alignSelf: 'center',
  },
});

export const about_style_tablet = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 10,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignSelf: 'center',

    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,

    padding: 10,
  },
  title: { color: default_colors.texts, fontSize: 30 },
  about: {
    width: '50%',
    borderColor: default_colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,
    alignSelf: 'center',
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 5,
    alignSelf: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    alignSelf: 'center',
  },
});

export const about_style_laptop = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 10,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignSelf: 'center',

    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  title: { color: default_colors.texts, fontSize: 30 },
  about: {
    width: '50%',
    borderColor: default_colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,
    alignSelf: 'center',
  },
  photo: {
    width: 300,
    height: 300,
    borderRadius: 5,
    alignSelf: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const about_style_desktop = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 10,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignSelf: 'center',

    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  title: { color: default_colors.texts, fontSize: 30 },
  about: {
    width: '50%',
    borderColor: default_colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,
    alignSelf: 'center',
  },
  photo: {
    width: 300,
    height: 300,
    borderRadius: 5,
    alignSelf: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const about_style_large = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
    borderWidth: 1,
    borderColor: default_colors.secondary,
    padding: 10,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignSelf: 'center',

    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  title: { color: default_colors.texts, fontSize: 30, alignSelf: 'center' },
  about: {
    width: '50%',
    borderColor: default_colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,
    alignSelf: 'center',
  },
  photo: {
    width: 300,
    height: 300,
    borderRadius: 5,
    alignSelf: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
