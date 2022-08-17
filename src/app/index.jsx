import './styles.css';
import { Header } from '../components';
import { About, Experience, Education, Skills } from '../pages';
// import { blocker } from '../scripts/blocker';

export function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
      </div>

      {/* {blocker()} */}
    </div>
  );
}
