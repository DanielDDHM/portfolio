import {
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { default_colors, Skill } from '../../constants';
import { styleHandler } from './handler';

export function Skills() {
  const [skill, setSkill] = useState([]);
  const [style, setStyle] = useState({});

  const sty = styleHandler();

  useEffect(() => {
    setSkill(Skill);
    setStyle(sty);
  }, [Skill, sty]);

  return (
    <View style={style.container}>
      <View style={style.div}>
        <Text style={style.title}>Skills</Text>
      </View>
      <View style={style.div}>
        {skill.map((item) =>
          item.font === 'fontawesome' ? (
            <View style={icon.div}>
                            <FontAwesome5
              key={item.id}
              name={item.icon}
              color={default_colors.secondary}
              size={30}
            />
                </View>
          ) : item.font === 'materialcomunity' ? (
            <View style={icon.div}>
            <MaterialCommunityIcons
              key={item.id}
              name={item.icon}
              color={default_colors.secondary}
              size={30}
            />
            </View>
          ) : item.font === 'fontisto' ? (
            <View style={icon.div}>
            <Fontisto
              key={item.id}
              name={item.icon}
              color={default_colors.secondary}
              size={30}
            />
            </View>
          ) : null,
        )}
      </View>
    </View>
  );
}

const icon = StyleSheet.create({
    div:{padding: 10}
})
