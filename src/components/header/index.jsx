import { Navi } from '../../constants';
import { Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styleHandler } from './handler';

export function Header() {
  const [head, setHead] = useState([]);
  const [style, setStyle] = useState({});

  const sty = styleHandler();

  useEffect(() => {
    setStyle(sty);
    setHead(Navi);
  }, [sty]);

  return (
    <View style={style.header}>
      <View>
        <Text>DDHM</Text>
      </View>
      <View style={style.list_li} >
        {head.map((item) => (
          <Text key={item.id}>{item.class}</Text>
        ))}
      </View>
    </View>
  );
}
