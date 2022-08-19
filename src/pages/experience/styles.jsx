import { StyleSheet } from 'react-native';

const default_experience = {
  container: {
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
    gap: '20px'
  },
  title: {},
  cards: {
    width: '100%',
    gap: '20px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export const experience_style_mobile = StyleSheet.create({
  ...default_experience,
  container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
  },
  cards: {
    gap: '10px',
  },
});

export const experience_style_tablet = StyleSheet.create({
  ...default_experience,
  container: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: '10px',
    borderRadius: '5px',
  },
  cards: {
    flex: '50%',
    gap: '20px',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});

export const experience_style_laptop = StyleSheet.create({
  ...default_experience,
});

export const experience_style_desktop = StyleSheet.create({
  ...default_experience,
});

export const experience_style_large = StyleSheet.create({
  ...default_experience,
});
