// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Skill } from '../../constants';
// import { skillsStyles } from './styles';

export function Skills() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    setSkill(Skill);
  }, [Skill]);

  return <View></View>;
}
