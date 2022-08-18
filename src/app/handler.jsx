import { media } from '../config';
import { appStyles } from './styles';

export function stylehandler() {
  const med = media();

  const style =
    med === 'Mobile'
      ? appStyles.Mobile
      : med === 'Tablet'
      ? appStyles.Tablet
      : med === 'Laptop'
      ? appStyles.Laptop
      : med === 'Desktop'
      ? appStyles.Desktop
      : med === 'Large'
      ? appStyles.Large
      : null;

  return style;
}
