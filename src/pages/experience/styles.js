import { StyleSheet } from 'react-native';
import { default_colors } from '../../constants';

export const experience_style_mobile = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    padding: 20,
  },
  cards: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
});

export const experience_style_tablet = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    padding: 20,
  },
  cards: {
    width: '100%',
    flexWrap: 'wrap',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
});

export const experience_style_laptop = StyleSheet.create({
  container: {
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    padding: 20,
  },
  cards: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
});

export const experience_style_desktop = StyleSheet.create({
  container: {
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  cards: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
});

export const experience_style_large = StyleSheet.create({
  container: {
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    padding: 20,

    borderColor: default_colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    shadowOffset: { width: 4, height: 3 },
    shadowColor: default_colors.secondary,
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  cards: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
});
