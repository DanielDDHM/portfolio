import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Courses, Grad } from '../../constants';
import { styleHandler } from './handler';

export function Education() {
  const [grad, setGrad] = useState([]);
  const [course, setCourse] = useState([]);
  const [style, setStyle] = useState([]);

  const sty = styleHandler();

  useEffect(() => {
    setGrad(Grad);
    setCourse(Courses);
    setStyle(sty);
  }, [Grad, Courses, sty]);

  return <View style={style.container}></View>;
}
