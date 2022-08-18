import { View, Text } from 'react-native';
import { AboutIcons } from '../../constants';

export function About() {
  return (
    <View>
      <View>
        <Text>About Me</Text>
      </View>
      <View>
        <Text>Lorem Ipsum</Text>
      </View>
    </View>
  );

  //   {AboutIcons.map((item) => (
  //     <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
  //       <i key={item.id}>{item.name}</i>
  //     </a>
  //   ))}
}
