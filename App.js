import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-white">
      <Home />
      <About />
      <Menu />
      <Reservation />
      <Contact />
    </div>
  );
}

export default App;