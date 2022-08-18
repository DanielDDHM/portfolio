import { useEffect, useState } from 'react';
import { FlatList, Text, ScrollView } from 'react-native';
import { Courses, Grad } from '../../constants';
// import { educationStyles } from './styles';

export function Education() {
  const [grad, setGrad] = useState([]);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    setGrad(Grad);
    setCourse(Courses);
  }, []);

  return (
    <section className="resume-section">
      <ScrollView className="resume-section-content">
        <Text>Education</Text>
        {grad.map((item) => (
          <ScrollView key={item.id}>
            <ScrollView>
              <Text>{item.instituiton}</Text>
              <Text>{item.title}</Text>
            </ScrollView>
            <ScrollView>
              <Text>06/2016 - 06/2021</Text>
            </ScrollView>
          </ScrollView>
        ))}
      </ScrollView>

      <ScrollView>
        <Text>Courses</Text>
        <FlatList
          data={course}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </ScrollView>
    </section>
  );
}
