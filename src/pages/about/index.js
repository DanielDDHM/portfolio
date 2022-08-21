import { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { AboutIcons } from '../../constants';
import { styleHandler } from './handler';
import profile from '../../assets/images/profile.jpeg';
import { AboutText, AboutButtons } from '../../components';
import { useMediaQuery } from 'react-responsive';
import "@expo/match-media";

export function About() {
  const [style, setStyle] = useState({});

  const sty = styleHandler();

  useEffect(() => {
    setStyle(sty);
  }, [sty]);

  return (
    <View>
      {useMediaQuery({ minWidth: 860 }) ? (
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
  one: { justifyContent: 'space-between', gap: '10px' },
  two: { display: 'flex', gap: '15px' },
});
