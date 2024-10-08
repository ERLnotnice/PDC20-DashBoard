import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Registration from './Registration';
import Mod01Registration from './Mod01Registration';
import reportWebVitals from './reportWebVitals';
import GreetHello from './Greetings/GreetHello';
import Homepage from './Conditionals/HomePage';
import LogAdmin from './DashBoard/LogAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogAdmin/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
