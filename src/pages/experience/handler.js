import { media } from '../../config';
import {
  experience_style_desktop,
  experience_style_laptop,
  experience_style_large,
  experience_style_mobile,
  experience_style_tablet,
} from './styles';

export function styleHandler() {
  const med = media();
  const style =
    med === 'Mobile'
      ? experience_style_mobile
      : med === 'Tablet'
      ? experience_style_tablet
      : med === 'Laptop'
      ? experience_style_laptop
      : med === 'Desktop'
      ? experience_style_desktop
      : med === 'Large'
      ? experience_style_large
      : null;

  return style;
}
