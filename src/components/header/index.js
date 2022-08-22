import { default_colors, Navi } from '../../constants';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { styleHandler } from './handler';
import logo from '../../assets/images/logo.png';
import { FontAwesome } from '@expo/vector-icons';

export function Header({ props }) {
  const [head, setHead] = useState([]);
  const [style, setStyle] = useState({});
  const [width, setWidth] = useState(0);

  const sty = styleHandler();

  useEffect(() => {
    setStyle(sty);
    setHead(Navi);
    setWidth(Dimensions.get('screen').width);
  }, [sty]);

  function scroolHandler(ref) {
    const { aboutRef, expRef, eduRef, skillsRef } = props;

    ref === 'Home'
      ? aboutRef.current?.scrollIntoView()
      : ref === 'Experience'
      ? expRef.current?.scrollIntoView()
      : ref === 'Education'
      ? eduRef.current?.scrollIntoView()
      : ref === 'Skills'
      ? skillsRef.current?.scrollIntoView()
      : null;
  }

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
              onPress={() => scroolHandler(item.class)}
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
