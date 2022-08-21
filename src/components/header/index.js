import { default_colors, Navi } from '../../constants';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styleHandler } from './handler';
import logo from '../../assets/images/logo.png';
import { FontAwesome } from '@expo/vector-icons';

export function Header() {
  const [head, setHead] = useState([]);
  const [style, setStyle] = useState({});
  const [width, setWidth] = useState(0);

  const sty = styleHandler();

  useEffect(() => {
    setStyle(sty);
    setHead(Navi);
    setWidth(Dimensions.get('screen').width);
  }, [sty]);

  return (
    <View style={style.header}>
      <View>
        <TouchableOpacity>
          <Image source={logo} style={style.photo} />
        </TouchableOpacity>
      </View>
      {width <= 860 ? (
        <TouchableOpacity
          style={{ justifyContent: 'center' }}
          onPress={() => alert('opened')}
        >
          <View style={style.dropdown}>
            <FontAwesome
              name="list-ul"
              size={30}
              color={default_colors.secondary}
            ></FontAwesome>
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
