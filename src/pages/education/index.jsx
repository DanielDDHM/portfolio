import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Courses, Grad } from '../../constants';
// import { educationStyles } from './styles';

export function Education() {
  const [grad, setGrad] = useState([]);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    setGrad(Grad);
    setCourse(Courses);
  }, []);

  return <View></View>;
}
