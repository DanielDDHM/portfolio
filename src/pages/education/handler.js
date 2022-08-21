import { media } from '../../config';
import {
  education_style_desktop,
  education_style_laptop,
  education_style_large,
  education_style_mobile,
  education_style_tablet,
} from './styles';

export function styleHandler() {
  const med = media();
  const style =
    med === 'Mobile'
      ? education_style_mobile
      : med === 'Tablet'
      ? education_style_tablet
      : med === 'Laptop'
      ? education_style_laptop
      : med === 'Desktop'
      ? education_style_desktop
      : med === 'Large'
      ? education_style_large
      : null;

  return style;
}
