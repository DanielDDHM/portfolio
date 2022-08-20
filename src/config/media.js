import { useMediaQuery } from 'react-responsive';

export const media = () => {
  const Mobile = useMediaQuery({
    minWidth: 320,
    maxWidth: 480,
  });

  const Tablet = useMediaQuery({
    minWidth: 481,
    maxWidth: 860,
  });

  const Laptop = useMediaQuery({
    minWidth: 861,
    maxWidth: 1024,
  });

  const Desktop = useMediaQuery({
    minWidth: 1025,
    maxWidth: 1200,
  });

  const Large_devices = useMediaQuery({
    minWidth: 1201,
  });

  const device = Mobile
    ? 'Mobile'
    : Tablet
    ? 'Tablet'
    : Laptop
    ? 'Laptop'
    : Desktop
    ? 'Desktop'
    : Large_devices
    ? 'Large'
    : 'Large';

  return device;
};
