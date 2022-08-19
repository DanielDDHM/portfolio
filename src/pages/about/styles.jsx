import { StyleSheet } from 'react-native';

const default_about = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  about: {
    width: '50%',
    borderColor: '#6b5b95',
    borderWidth: '1px',
    borderRadius: '5px',
    padding: '10px',
    shadowOffset: { width: 4, height: 3 },
    shadowColor: '#6b5b95',
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  photo: {
    width: '200px',
    height: '200px',
    borderRadius: '10%',
    alignSelf: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    justifyContent: 'space-between',
  },
};

export const about_style_mobile = StyleSheet.create({
  container: {
    ...default_about.container,
  },
  photo: {
    ...default_about.photo,
  },
  about: {
    ...default_about.about,
  },
  icons: {
    ...default_about.icons,
  },
});

export const about_style_tablet = StyleSheet.create({
  container: {
    ...default_about.container,
  },
  photo: {
    ...default_about.photo,
  },
  about: {
    ...default_about.about,
  },
  icons: {
    ...default_about.icons,
  },
});

export const about_style_laptop = StyleSheet.create({
  container: {
    ...default_about.container,
  },
  photo: {
    ...default_about.photo,
  },
  about: {
    ...default_about.about,
  },
  icons: {
    ...default_about.icons,
  },
});

export const about_style_desktop = StyleSheet.create({
  container: {
    ...default_about.container,
  },
  photo: {
    ...default_about.photo,
  },
  about: {
    ...default_about.about,
  },
  icons: {
    ...default_about.icons,
  },
});

export const about_style_large = StyleSheet.create({
  container: {
    ...default_about.container,
  },
  photo: {
    ...default_about.photo,
  },
  about: {
    ...default_about.about,
  },
  icons: {
    ...default_about.icons,
  },
});
