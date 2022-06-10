import React from 'react';
import { Toaster } from 'react-hot-toast';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <About/>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Home;