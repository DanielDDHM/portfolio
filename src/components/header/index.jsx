import { Navi } from '../../constants';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import { styleHandler } from './handler';
import logo from '../../assets/images/logo.png';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

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
          <Image source={logo} style={style.photo}/>
        </TouchableOpacity>
      </View>
      {useMediaQuery({ maxWidth: 860 }) ? (
        <TouchableOpacity
          style={{ justifyContent: 'center' }}
          onPress={() => alert('opened')}
        >
          <View style={style.dropdown}>
            <FontAwesomeIcon icon={faList} color="#CFB53B" size={20} />
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
