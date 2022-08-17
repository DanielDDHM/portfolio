import { contactStyle } from './styles';

export function Contact() {
  return (
    <section className="resume-section">
      <div className="resume-section-content">
        <h2 className="mb-5">Contact</h2>
        <form style={contactStyle.contact_form} action="Submit">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}
