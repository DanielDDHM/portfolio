import { Dimensions } from 'react-native';

export function media(){

    const width = Dimensions.get('screen').width

    const minWidths = {
        mobile: 320,
        tablet: 481,
        laptop: 861,
        desktop: 1025,
        large: 1201
    }

  const device = width >= minWidths.mobile && width < minWidths.tablet
    ? 'Mobile'
    : width >= minWidths.tablet && width < minWidths.laptop
    ? 'Tablet'
    : width >= minWidths.laptop && width < minWidths.desktop
    ? 'Laptop'
    : width >= minWidths.desktop && width < minWidths.large
    ? 'Desktop'
    : width >= minWidths.large
    ? 'Large'
    : 'Large';

  return device;
};
