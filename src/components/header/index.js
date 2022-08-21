import { default_colors, Navi } from '../../constants';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styleHandler } from './handler';
import logo from '../../assets/images/logo.png';
import { useMediaQuery } from 'react-responsive';
import { FontAwesome } from '@expo/vector-icons'; 
import "@expo/match-media";

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
          <Image source={logo} style={style.photo} />
        </TouchableOpacity>
      </View>
      {useMediaQuery({ maxWidth: 860 }) ? (
        <TouchableOpacity
          style={{ justifyContent: 'center' }}
          onPress={() => alert('opened')}
        >
          <View style={style.dropdown}>
            <FontAwesome name='list-ul' size={30} color={default_colors.secondary}></FontAwesome>
          </View>
        </TouchableOpacity>
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
