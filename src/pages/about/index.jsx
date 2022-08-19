import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import { AboutIcons } from '../../constants';
import { styleHandler } from './handler';
import profile from '../../assets/images/profile.jpg';
import { AboutText } from '../../components';

export function About() {
  const [style, setStyle] = useState({});

  const sty = styleHandler();

  useEffect(() => {
    setStyle(sty);
  },[sty]);

  return (
    <View style={style.container}>
      <View style={style.about}>
        <AboutText />
      </View>
      <View style={{justifyContent: 'space-between', gap:'10px'}}>
        <Image source={profile} style={style.photo} />
        <View style={style.icons}>
          {AboutIcons.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => Linking.openURL(item.link)}
            >
              <View style={{borderColor: '#6b5b95', borderWidth: '1px', borderRadius: '3px', padding: '5px'}}>
              <FontAwesomeIcon icon={item.icon} color="#6b5b95" size={30} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
