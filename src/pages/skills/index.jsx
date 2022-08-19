import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useEffect, useState } from 'react';
import { View, ScrollView, Text, FlatList } from 'react-native';
import { Skill } from '../../constants';
import { skillsStyles } from './styles';

export function Skills() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    setSkill(Skill);
  }, [Skill]);

  return (
    <View>
      <ScrollView className="resume-section-content">
        <View>
          <Text>Skills</Text>
        </View>
        <View>
          <Text>Stacks</Text>
        </View>
        <View>
          {skill.map((item) => (
            <FontAwesomeIcon key={item.id} icon={item.icon} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
