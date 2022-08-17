import './styles.css';
import { Navi } from '../../constants';

export function Header() {
  return (
    <div className="header">
      <div className="header-div">
        <p className="header-logo">Daniel Machado</p>
      </div>
      <div className="header-div">
        <ul className="nav-link">
          <li className="nav-link-li" onClick={() => console.log('ok')}>
            {Navi.Home}
          </li>
          <li className="nav-link-li">{Navi.Experience}</li>
          <li className="nav-link-li">{Navi.Skills}</li>
          <li className="nav-link-li">{Navi.Contact}</li>
        </ul>
      </div>
    </div>
  );
}
