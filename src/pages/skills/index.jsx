import { View, ScrollView, Text, FlatList } from 'react-native';
import { Skill } from '../../constants';
import { skillsStyles } from './styles';
// import { Skill } from '../../constants';
// import { skillsStyles } from './styles';

export function Skills() {
  return (
    <View>
      <section className="resume-section">
        <ScrollView className="resume-section-content">
          <Text>Skills</Text>
          <Text>Stacks</Text>
          <FlatList
            data={Skill}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </ScrollView>
      </section>
    </View>
  );
}
