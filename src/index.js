import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/styles.scss"
import './styles/App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "leaflet/dist/leaflet.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
