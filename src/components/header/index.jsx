import { Navi } from '../../constants';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styleHandler } from './handler';
import logo from '../../assets/images/logo.png';
import { useMediaQuery } from 'react-responsive';

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
        <TouchableOpacity>
          <Image
            source={logo}
            style={{ width: '100px', height: '100px' }}
          />
        </TouchableOpacity>
      </View>
      {useMediaQuery({ maxWidth: 765 }) ? (
        <Text>A</Text>
      ) : (
        <View style={style.list_li}>
          {head.map((item) => (
            <TouchableOpacity
              style={style.btn_li}
              onPress={() => alert(`${item.class}`)}
              key={item.id}
            >
              <Text style={style.txt_li}>{item.class}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
