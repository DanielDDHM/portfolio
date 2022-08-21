import { StyleSheet } from 'react-native';
import { default_colors } from '../../constants';

export const experience_style_mobile = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    gap: '20px',
  },
  cards: {
    width: '100%',
    gap: '20px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
  card: { width: 'fit-content' },
});

export const experience_style_tablet = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    gap: '20px',
  },
  cards: {
    width: '100%',
    gap: '20px',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
  card: { width: 'fit-content' },
});

export const experience_style_laptop = StyleSheet.create({
  container: {
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    gap: '20px',
  },
  cards: {
    width: '100%',
    gap: '10px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
  card: { width: 'fit-content' },
});

export const experience_style_desktop = StyleSheet.create({
  container: {
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    gap: '20px',
  },
  cards: {
    width: '100%',
    gap: '20px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
  card: { width: 'fit-content' },
});

export const experience_style_large = StyleSheet.create({
  container: {
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    gap: '20px',
  },
  cards: {
    width: '100%',
    gap: '20px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  title: { color: default_colors.texts, fontSize: 30 },
  card: { width: 'fit-content' },
});
