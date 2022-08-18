import { useEffect, useState } from 'react';
import { FlatList, Text, View, ScrollView } from 'react-native';
import { Exp } from '../../constants';
// import { experienceStyle } from './styles';

export function Experience() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    setExp(Exp);
  }, [Exp]);

  return (
    <View>
      <ScrollView>
        <Text>Experience</Text>
        {exp.map((item) => (
          <ScrollView key={item.id}>
            <Text>{item.title}</Text>
            <Text>{item.employer}</Text>
            <FlatList
              data={item.acts}
              renderItem={({ item }) => <Text>{item.act}</Text>}
            />
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
}
