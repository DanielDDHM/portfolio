import { View, ScrollView } from 'react-native';
import { Header } from '../components';
import { About, Experience, Education, Skills, Contact } from '../pages';
import { appStyles } from './styles';
// import { blocker } from '../scripts/blocker';

export function Main() {
  return (
    <View style={appStyles.app}>
      <Header />
      <hr className="m-0" />
      <ScrollView className="body">
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Contact />
      </ScrollView>
      {/* {blocker()} */}
    </View>
  );
}
