import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from 'react-dom';
import App from './App'; // Asegúrate de que la ruta sea correcta
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
