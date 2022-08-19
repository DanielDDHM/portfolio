import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
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
        <Text style={{ color: 'white', fontSize: 30 }}>Experience</Text>
      </View>
      <View style={style.cards}>
        {exp.map((item) => (
          <View style={{ alignItems: 'center' }}>
            <ExpCard key={item.id} props={item}></ExpCard>
          </View>
        ))}
      </View>
    </View>
  );
}
