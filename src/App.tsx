import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

import KazbooProjectPage from './pages/KazbooProjectPage';

const params = new URLSearchParams(window.location.search);
const redirect = params.get('redirect');

if (redirect) {
  window.history.replaceState(null, '', `/anna-portfolio${redirect}`);
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/kazboo" element={<KazbooProjectPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
