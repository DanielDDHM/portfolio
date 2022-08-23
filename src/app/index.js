import { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Header, Footer } from '../components';
// import { blocker } from '../config';
import { About, Experience, Education, Skills } from '../pages';
import { stylehandler } from './handler';

export function Main() {
  const [style, setStyle] = useState({});

  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const eduRef = useRef(null);
  const skillsRef = useRef(null);

  const sty = stylehandler();

  useEffect(() => {
    setStyle(sty);
  }, [sty]);

  return (
    <ScrollView>
      <View style={style.container}>
        <Header props={{ aboutRef, expRef, eduRef, skillsRef }} />
        <View style={style.body}>
          <View style={style.mb0} ref={aboutRef}>
            <About />
          </View>
          <View style={style.mb0} ref={expRef}>
            <Experience />
          </View>
          <View style={style.mb0} ref={eduRef}>
            <Education />
          </View>
          <View style={style.mb0} ref={skillsRef}>
            <Skills />
          </View>
          <Footer />
        </View>
        {/* {blocker()} */}
      </View>
    </ScrollView>
  );
}
