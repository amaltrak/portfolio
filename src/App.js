// eslint-disable-next-line
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill'
import Contact from './components/Contact';

function App() {
  return (
    <div>
     <Navbar />
     <Home /> 
     <About /> 
     <Portfolio />
     <Skill />
     <Contact /> 
     <SocialLinks />
     
    </div>
  );
}

export default App;
