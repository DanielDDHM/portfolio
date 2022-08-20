import { media } from '../../config';
import {
  skills_style_desktop,
  skills_style_laptop,
  skills_style_large,
  skills_style_mobile,
  skills_style_tablet,
} from './styles';

export function styleHandler() {
  const med = media();
  const style =
    med === 'Mobile'
      ? skills_style_mobile
      : med === 'Tablet'
      ? skills_style_tablet
      : med === 'Laptop'
      ? skills_style_laptop
      : med === 'Desktop'
      ? skills_style_desktop
      : med === 'Large'
      ? skills_style_large
      : null;

  return style;
}
