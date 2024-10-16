import React from 'react';  // Importa o React
import ReactDOM from 'react-dom/client';  // Importa o método para renderizar componentes no DOM
import App from './App.jsx';  // Importa o componente principal `App`
import './index.css';  // Importa o arquivo CSS global

// Método `createRoot` é usado para renderizar o componente React na árvore do DOM.
// `StrictMode` é uma ferramenta para destacar possíveis problemas no aplicativo React. Ele renderiza os componentes duas vezes em modo de desenvolvimento para detectar problemas de ciclo de vida.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  // Renderiza o componente `App` dentro do root DOM.
  </React.StrictMode>,
);
