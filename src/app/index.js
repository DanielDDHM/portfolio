import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Header, Footer } from '../components';
// import { blocker } from '../config';
import { About, Experience, Education} from '../pages';
import { stylehandler } from './handler';

export function Main() {
  const [style, setStyle] = useState({});

  const sty = stylehandler();

  useEffect(() => {
    setStyle(sty);
  }, [sty]);

  return (
    <ScrollView>
      <View style={style.container}>
        <Header />
        <View style={style.body}>
          <View style={style.mb0}>
            <About />
          </View>
          <View style={style.mb0}>
            <Experience />
          </View>
          <View style={style.mb0}>
            <Education />
        </View>
          {/* 
          <View style={style.mb0}>
            <Skills />
          </View>
          <View style={style.mb0}>
            <Contact />
          </View> */}
          <Footer />
        </View>
        {/* {blocker()} */}
      </View>
    </ScrollView>
  );
}
