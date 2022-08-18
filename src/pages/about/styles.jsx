import { StyleSheet } from 'react-native';

const default_about = {
  title: {},
  about: {   padding: '10px', textAlign:'center'},
  photo:{width:'125px', height:'125px', borderRadius:'10%', alignSelf: 'center'},
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
};

export const about_style_mobile = StyleSheet.create({
  title: {
    ...default_about.title
  },
  photo:{
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
  title: {
    ...default_about.title,
  },
  photo:{
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
  title: {
    ...default_about.title,
  },
  photo:{
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
  title: {
    ...default_about.title,
  },
  photo:{
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
  title: {
    ...default_about.title,
  },
  photo:{
    ...default_about.photo,
  },
  about: {
    ...default_about.about,
  },
  icons: {
    ...default_about.icons,
  },
});
