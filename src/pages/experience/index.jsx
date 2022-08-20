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
        <Text style={txt.txt}>Experience</Text>
      </View>
      <View style={style.cards}>
        {exp.map((item) => (
          <View key={item.id} style={txt.card}>
            <ExpCard props={item}></ExpCard>
          </View>
        ))}
      </View>
    </View>
  );
}

const txt = StyleSheet.create({
    txt: { color: 'white', fontSize: 30 },
    card:{ width:'fit-content'}
})