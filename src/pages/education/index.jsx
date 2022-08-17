import { Courses, Grad } from '../../constants';
export function Education() {
  return (
    <section className="resume-section">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        {Grad.map((item) => (
          <div className="d-flex flex-column" key={item.id}>
            <div className="flex-grad">
              <h3 className="mb-0">{item.instituiton}</h3>
              <div className="subheading mb-3">{item.title}</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">06/2016 - 06/2021</span>
            </div>
          </div>
        ))}
      </div>

      <div className="resume-section-content">
        <h2 className="mb-5">Courses</h2>
        <ul className="fa-ul mb-0">
          {Courses.map((item) => (
            <li key={item.id}>
              <span className="fa-li">
                <i className="fas fa-trophy text-warning"></i>
              </span>
              <div className="subheading mb-3">{item.title}</div>
              <div className="subheading mb-3">{item.instituiton}</div>
              <div className="subheading mb-3">{item.year}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
