import { default_colors, Navi } from '../../constants';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styleHandler } from './handler';
import logo from '../../assets/images/logo.png';
import { FontAwesome } from '@expo/vector-icons';

export function Header({ props }) {
  const [head, setHead] = useState([]);
  const [style, setStyle] = useState({});
  const [width, setWidth] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const [refs, setRefs] = useState(null);

  const sty = styleHandler();
  useEffect(() => {
    setStyle(sty);
    setHead(Navi);
    setWidth(Dimensions.get('screen').width);
    setRefs(props);
  }, [sty, props, width]);

  function scrollHandler(ref) {
    const { aboutRef, expRef, eduRef, skillsRef } = refs;

    ref === 'Home'
      ? aboutRef?.current?.scrollIntoView()
      : ref === 'Experience'
      ? expRef?.current?.scrollIntoView()
      : ref === 'Education'
      ? eduRef?.current?.scrollIntoView()
      : ref === 'Skills'
      ? skillsRef?.current?.scrollIntoView()
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
          onPress={() => setDropdown(!dropdown)}
        >
          {!dropdown ? (
            <View style={style.dropdown}>
              <FontAwesome
                name="list-ul"
                size={30}
                color={default_colors.secondary}
              ></FontAwesome>
            </View>
          ) : (
            <View style={style.dropdown}>
              {head.map((item) => (
                <TouchableOpacity
                  style={{
                    borderBottomColor: default_colors.secondary,
                    borderWidth: 1,
                    marginBottom: 5,
                  }}
                  onPress={() => {
                    setDropdown(!dropdown);
                    scrollHandler(item.class);
                  }}
                  key={item.id}
                >
                  <Text style={style.txt_li}>{item.class}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </TouchableOpacity>
      ) : (
        <View style={style.list_li}>
          {head.map((item) => (
            <TouchableOpacity
              style={style.btn_li}
              onPress={() => scrollHandler(item.class)}
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
