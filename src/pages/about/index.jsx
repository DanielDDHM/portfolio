import { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { AboutIcons } from '../../constants';
import { styleHandler } from './handler';
import profile from '../../assets/images/profile.jpeg';
import { AboutText, AboutButtons } from '../../components';
import { useMediaQuery } from 'react-responsive';

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
          <View style={wiew.one}>
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
          <View style={wiew.two}>
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

const wiew = StyleSheet.create({
    one: { justifyContent: 'space-between', gap: '10px' },
    two: { display: 'flex', gap: '15px' }
})