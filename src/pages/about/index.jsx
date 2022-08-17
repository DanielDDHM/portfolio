import { AboutIcons } from '../../constants';

export function About() {
  return (
    <section className="resume-section">
      <div className="resume-section-content">
        <h1 className="mb-0">Daniel Machado</h1>
      </div>

      <p className="about-text">
        Developer for aproximadely 2 years in projects and freelance.
        <br />
        Bachelor in electrical engineering, with experience and practice in the
        area.
        <br />
        Communicability and good fluency in German and English.
      </p>

      <div className="social-icons">
        {AboutIcons.map((item) => (
          <a
            className={`social-icon ${item.name}`}
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <i key={item.id} className={item.class}></i>
          </a>
        ))}
      </div>
    </section>
  );
}
