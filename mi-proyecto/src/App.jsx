import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import AboutMe from './component/AboutMe';
import MySkills from './component/MySkills'
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <Hero />
            <AboutMe/>
            <MySkills/>
        </div>
    );
};

export default App;
