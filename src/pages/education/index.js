import { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { Courses, Grad } from '../../constants';
import { styleHandler } from './handler';

export function Education() {
  const [grad, setGrad] = useState([]);
  const [course, setCourse] = useState([]);
  const [style, setStyle] = useState([]);

  const sty = styleHandler();
  const educationRef = useRef();

  useEffect(() => {
    setGrad(Grad);
    setCourse(Courses);
    setStyle(sty);
  }, [Grad, Courses, sty]);

  return (
    <View style={style.container} ref={educationRef}>
      <View style={style.div}>
        <Text style={style.title}>Graduation</Text>
        {grad.map((item) => (
          <View style={style.items} key={item.id}>
            <Text style={style.text}>{`\u2022 ${item.title} `}</Text>
            <Text
              style={style.text}
            >{`${item.instituiton} | ${item.year}`}</Text>
          </View>
        ))}
      </View>
      <View style={style.div}>
        <Text style={style.title}>Courses</Text>
        {course.map((item) => (
          <View style={style.items} key={item.id}>
            <Text style={style.text}>{`\u2022 ${item.title} `}</Text>
            <Text
              style={style.text}
            >{`${item.instituiton} | ${item.year}`}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
