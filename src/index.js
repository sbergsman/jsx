// import react and react donm
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// get ref to div with id root
const el = document.getElementById('root');

// tell react to take control of element
const root = ReactDOM.createRoot(el);


//show on the screen bleh
root.render(<App />);