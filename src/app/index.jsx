import { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from '../components';
import { media } from '../config/media';
import { About, Experience, Education, Skills, Contact } from '../pages';
import { appStyles } from './styles';
// import { blocker } from '../scripts/blocker';

export function Main() {
function stylehandler() {
    const med = media();

    const style = med === 'Mobile'
      ? appStyles.Mobile
      : med === 'Tablet'
      ? appStyles.Tablet
      : med === 'Laptop'
      ? appStyles.Laptop
      : med === 'Desktop'
      ? appStyles.Desktop
      : med === 'Large'
      ? appStyles.Large
      : null;

    return style;
  }

  return (
    <View style={stylehandler()}>
      <Header />
      <ScrollView>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </ScrollView>
      {/* {blocker()} */}
    </View>
  );
}
