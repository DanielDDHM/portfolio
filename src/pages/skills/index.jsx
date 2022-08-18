import { View, ScrollView, Text } from 'react-native';
// import { Skill } from '../../constants';
// import { skillsStyles } from './styles';

export function Skills() {
  return (
    <View>
      <section className="resume-section">
        <ScrollView className="resume-section-content">
          <Text>Skills</Text>
          <Text>Stacks</Text>
        </ScrollView>
      </section>
    </View>
  );
}
