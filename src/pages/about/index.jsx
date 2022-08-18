import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import { AboutIcons } from '../../constants';
import { styleHandler } from './handler';
import profile from '../../assets/images/profile.jpg'

export function About() {
  const [style, setStyle] = useState({});

  const sty = styleHandler();

  useEffect(() => {
    setStyle(sty);
  });

  return (
    <View style={{alignItems: 'center'}}>
      <View style={style.title}>
        <Text>About Me</Text>
      </View>
      <View style={style.about}>
        <Image 
        source={profile}
        style={style.photo}
        />    
    <Text style={style.about}>Lorem Ipsum</Text>
      </View>
      <View style={style.icons}>
        {AboutIcons.map((item) => (
          <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
            <FontAwesomeIcon icon={item.icon} color='#6b5b95' size={25}/>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
