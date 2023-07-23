import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Baneer';
import { NavBar } from './components/NacBar';
import { Skills } from './components/Skills';
import { Projects } from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
