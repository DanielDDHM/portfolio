import { contactStyle } from './styles';
import { ScrollView } from 'react-native';

export function Contact() {
  return (
    <section className="resume-section">
      <ScrollView className="resume-section-content">
        <h2>Contact</h2>
        <form style={contactStyle.contact_form} action="Submit">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <input type="text" />
          <button>Submit</button>
        </form>
      </ScrollView>
    </section>
  );
}
