import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Skill } from '../../constants';


export function Skills() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    setSkill(Skill);
  }, [Skill]);

  return <View></View>;
}
