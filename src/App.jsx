import './bg-animation.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import './index.css';
import './App.css';


function App() {
  return (
    <div className="full-screen">
      <div className="bg-animated" />
      <Navbar />
      <Hero />
      <Courses />
      <About />
    </div>
  );
}

export default App;
