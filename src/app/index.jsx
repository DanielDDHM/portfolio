import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from '../components';
import { About, Experience, Education, Skills, Contact } from '../pages';
import { stylehandler } from './handler';

export function Main() {
  const [style, setStyle] = useState({});

  const sty = stylehandler();

  useEffect(() => {
    setStyle(sty);
  }, [sty]);

  return (
    <ScrollView style={style.container}>
      <Header />
      <View>
        <View style={style.mb0}>
          <About />
        </View>
        <View style={style.mb0}>
          <Experience />
        </View>
        <View style={style.mb0}>
          <Education />
        </View>
        <View style={style.mb0}>
          <Skills />
        </View>
        <View style={style.mb0}>
          <Contact />
        </View>
      </View>
      {/* {blocker()} */}
    </ScrollView>
  );
}
