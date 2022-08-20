import { media } from '../../config';
import {
  contact_style_desktop,
  contact_style_laptop,
  contact_style_large,
  contact_style_mobile,
  contact_style_tablet,
} from './styles';

export function styleHandler() {
  const med = media();
  const style =
    med === 'Mobile'
      ? contact_style_mobile
      : med === 'Tablet'
      ? contact_style_tablet
      : med === 'Laptop'
      ? contact_style_laptop
      : med === 'Desktop'
      ? contact_style_desktop
      : med === 'Large'
      ? contact_style_large
      : null;

  return style;
}
