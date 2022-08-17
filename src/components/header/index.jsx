import { headerStyle } from './styles';
import { Navi } from '../../constants';

export function Header() {
  return (
    <div style={headerStyle.header}>
      <div style={headerStyle.header_div}>
        <p style={headerStyle.header_logo}>Daniel Machado</p>
      </div>
      <div style={headerStyle.header_div}>
        <ul style={headerStyle.nav_link}>
          <li style={headerStyle.nav_link_li} onClick={() => console.log('ok')}>
            {Navi.Home}
          </li>
          <li style={headerStyle.nav_link_li}>{Navi.Experience}</li>
          <li style={headerStyle.nav_link_li}>{Navi.Skills}</li>
          <li style={headerStyle.nav_link_li}>{Navi.Contact}</li>
        </ul>
      </div>
    </div>
  );
}
