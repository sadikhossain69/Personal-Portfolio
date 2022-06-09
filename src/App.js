import './App.css';
import Hero from '../src/components/Hero'
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Hero/>
      <Skills/>
      <Contact/>
      <Footer/>
      <Toaster />
    </div>
    // #2D2B3B
  );
}

export default App;
