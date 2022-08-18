import { contactStyle } from './styles';
import { ScrollView, Text, View } from 'react-native';

export function Contact() {
  return (
    <View>
      <ScrollView>
        <Text>Contact</Text>
        {/* <form style={contactStyle.contact_form} action="Submit">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <input type="text" />
          <button>Submit</button>
        </form> */}
      </ScrollView>
    </View>
  );
}
