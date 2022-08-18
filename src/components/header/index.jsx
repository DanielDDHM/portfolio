import { Navi } from '../../constants';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styleHandler } from './handler';
import logo from '../../assets/images/logo.png';

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
        <TouchableOpacity onPress={() => alert('Ola marilene')}>
          <Image
            source={logo}
            style={{ width: '100px', height: '100px' }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={style.list_li}>
        {head.map((item) => (
          <TouchableOpacity
            style={style.btn_li}
            onPress={() => console.log(`${item.class}`)}
            key={item.id}
          >
            <Text style={style.txt_li}>{item.class}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
