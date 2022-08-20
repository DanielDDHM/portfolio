import { StyleSheet } from 'react-native';

export const default_about = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
    borderWidth: '1px',
    borderColor: '#CFB53B',
    padding: '10px',
    borderRadius: '7px',
    justifyContent: 'space-between',
    alignSelf: 'center',

    shadowOffset: { width: 4, height: 3 },
    shadowColor: '#CFB53B',
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  about: {
    width: '50%',
    height: 'max-content',
    borderColor: '#CFB53B',
    borderWidth: '1px',
    borderRadius: '5px',
    padding: '10px',
    shadowOffset: { width: 4, height: 3 },
    shadowColor: '#CFB53B',
    shadowOpacity: 0.7,
    shadowRadius: 4,
    alignSelf: 'center',
  },
  photo: {
    width: '300px',
    height: '300px',
    borderRadius: '10%',
    alignSelf: 'center',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export const about_style_mobile = StyleSheet.create({
  container: {
    ...default_about.container,
    gap: '10px'
  },
  photo: {
    width: '125px',
    height: '125px',
    ...default_about.photo,
  },
  about: {
    ...default_about.about,
    width: '100%',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignSelf: 'center',
  },
});

export const about_style_tablet = StyleSheet.create({
  container: {
    ...default_about.container,
    gap: '10px',
  },
  photo: {
    ...default_about.photo,
    width: '200px',
    height: '200px',
  },
  about: {
    ...default_about.about,
    width: '50%',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    alignSelf: 'center',
  },
});

export const about_style_laptop = StyleSheet.create({
  ...default_about,
});

export const about_style_desktop = StyleSheet.create({
  ...default_about,
});

export const about_style_large = StyleSheet.create({
  ...default_about,
});
