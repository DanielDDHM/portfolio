import { StyleSheet, Text } from 'react-native';
import { default_colors } from '../../constants';

export function AboutText() {
  return (
    <Text style={Txt.container}>
      I am currently graduated in electrical engineering and i have been working
      as a developer for the last 2 two years, working mostly with javascript
      and golang technologies. I work as a fullstack with Js, Node and Ts techs,
      in addition to docker, aws and kubernets. I have experience with
      monolithic architectures, microservices and mvc. I use MongoDb, PostgreSql
      and Mysql databases.
    </Text>
  );
}

const Txt = StyleSheet.create({
  container: { color: default_colors.texts, fontSize: 15 },
});
