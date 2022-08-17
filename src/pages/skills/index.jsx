import { Skill } from '../../constants';
import { skillsStyles } from './styles';

export function Skills() {
  return (
    <section className="resume-section">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Stacks</div>
        <ul style={skillsStyles.dev_icons}>
          {Skill.map((item) => (
            <li className="list-inline-item" key={item.id}>
              <i className={item.icon}>{item.name}</i>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
