import React from 'react'
import Header from './component/Header.jsx'
import Hero from './component/Hero.jsx'
import ReactDOM from 'react-dom';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
  </React.StrictMode>,
)
