import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExpCard } from '../../components';
import { Exp } from '../../constants';
import { styleHandler } from './handler';

export function Experience() {
  const [exp, setExp] = useState([]);
  const [style, setStyle] = useState({});

  const sty = styleHandler();
  useEffect(() => {
    setStyle(sty);
    setExp(Exp);
  }, [sty, exp]);

  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>Experience</Text>
      </View>
      <View style={style.cards}>
        {exp.map((item) => (
          <View key={item.id} style={style.card}>
            <ExpCard props={item}></ExpCard>
          </View>
        ))}
      </View>
    </View>
  );
}
