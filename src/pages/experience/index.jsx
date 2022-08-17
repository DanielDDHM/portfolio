import { Exp } from '../../constants';

export function Experience() {
  return (
    <section className="resume-section">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        {Exp.map((item) => (
          <div className="exp" key={item.id}>
            <h3 className="exp-title">{item.title}</h3>
            <div className="employee-title">{item.employer}</div>
            {item.activities.map((act) => (
              <p key={act.id}>{act.act}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
