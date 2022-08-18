import { media } from '../../config';
import {
  header_style_desktop,
  header_style_laptop,
  header_style_large,
  header_style_mobile,
  header_style_tablet,
} from './styles';

export function styleHandler() {
  const med = media();
  const style =
    med === 'Mobile'
      ? header_style_mobile
      : med === 'Tablet'
      ? header_style_tablet
      : med === 'Laptop'
      ? header_style_laptop
      : med === 'Desktop'
      ? header_style_desktop
      : med === 'Large'
      ? header_style_large
      : null;

  return style;
}
