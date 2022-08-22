import { useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { AboutIcons } from '../../constants';
import { styleHandler } from './handler';
import profile from '../../assets/images/profile.jpeg';
import { AboutText, AboutButtons } from '../../components';

export function About() {
  const [style, setStyle] = useState({});
  const [width, setWidth] = useState(0);

  const sty = styleHandler();
  const aboutRef = useRef('About');

  useEffect(() => {
    setStyle(sty);
    setWidth(Dimensions.get('screen').width);
  }, [sty]);

  return (
    <View ref={aboutRef}>
      {width >= 860 ? (
        <View style={style.container}>
          <View style={style.about}>
            <AboutText />
          </View>
          <View style={box.one}>
            <Image source={profile} style={style.photo} />
            <View style={style.icons}>
              {AboutIcons.map((item) => (
                <AboutButtons key={item.id} icon={item.icon} link={item.link} />
              ))}
            </View>
          </View>
        </View>
      ) : (
        <View>
          <View style={box.two}>
            <Image source={profile} style={style.photo} />
            <View style={style.about}>
              <AboutText />
            </View>
            <View style={style.icons}>
              {AboutIcons.map((item) => (
                <AboutButtons key={item.id} icon={item.icon} link={item.link} />
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const box = StyleSheet.create({
  one: { justifyContent: 'space-between', padding: 10 },
  two: { display: 'flex', padding: 15 },
});
