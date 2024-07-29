import React, { useRef } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import AboutMe from './component/AbotMe/AboutMe';
import MySkills from './component/MySkills/MySkills';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contacts/contact';
import './App.css';

const App = () => {
    const heroRef = useRef(null);
    const aboutMeRef = useRef(null);
    const mySkillsRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
  

    return (
        <Box className="app-container">
            <Header 
                heroRef={heroRef}
                aboutMeRef={aboutMeRef}
                mySkillsRef={mySkillsRef}
                portfolioRef={portfolioRef}
                contactRef={contactRef}
            />
            <Box id="inicio" ref={heroRef}>
                <Hero />
            </Box>
            <Box id="about" ref={aboutMeRef}>
                <AboutMe />
            </Box>
            <Box id="experience" ref={mySkillsRef}>
                <MySkills />
            </Box>
            <Box id="portfolio" ref={portfolioRef}>
                <Portfolio />
            </Box>
            <Box id="contact" ref={contactRef}>
                <Contact />
            </Box>
        </Box>
    );
};

export default App;