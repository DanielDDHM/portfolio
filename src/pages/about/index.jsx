import { View, ScrollView, Text } from 'react-native';
import { AboutIcons } from '../../constants';

export function About() {
  return (
    <View>
      <section className="resume-section">
        <ScrollView className="resume-section-content">
          <Text>Daniel Machado</Text>
        </ScrollView>

        <Text>
          Developer for aproximadely 2 years in projects and freelance.
          <br />
        </Text>

        <ScrollView>
          {AboutIcons.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
              <i key={item.id}>{item.name}</i>
            </a>
          ))}
        </ScrollView>
      </section>
    </View>
  );
}
