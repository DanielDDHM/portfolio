import { StyleSheet } from 'react-native';
import { media } from '../../config';
import {
  about_style_desktop,
  about_style_laptop,
  about_style_large,
  about_style_mobile,
  about_style_tablet
} from './styles';

export function styleHandler() {
  const med = media();
  const style =
    med === 'Mobile'
      ? about_style_mobile
      : med === 'Tablet'
      ? about_style_tablet
      : med === 'Laptop'
      ? about_style_laptop
      : med === 'Desktop'
      ? about_style_desktop
      : med === 'Large'
      ? about_style_large
      : StyleSheet.create({});

  return style;
}
