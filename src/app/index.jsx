import { View, ScrollView } from 'react-native';
import { Header } from '../components';
import { About, Experience, Education, Skills, Contact } from '../pages';
import { stylehandler } from './handler';

export function Main() {
  return (
    <ScrollView style={stylehandler()}>
      <Header />
      <ScrollView>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </ScrollView>
      {/* {blocker()} */}
    </ScrollView>
  );
}
