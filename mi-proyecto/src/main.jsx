import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import Header from './component/Header.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header/>
    <h1>HOLAA</h1>
  </React.StrictMode>,
)
