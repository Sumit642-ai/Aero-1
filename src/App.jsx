import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './Page';

import Hero from './components/Hero';
import Courses from './components/Courses';
import About from './components/About';
import SemesterPage from './components/SemesterPage';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page><Hero /></Page>} />
        <Route path="/materials" element={<Page><Courses /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/materials/semester/:id" element={<Page><SemesterPage /></Page>} />
      </Routes>
    </Router>
  );
}

export default App;
