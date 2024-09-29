// import react and react donm
import React from 'react';
import ReactDOM from 'react-dom/client';

// get ref to div with id root
const el = document.getElementById('root');

// tell react to take control of element
const root = ReactDOM.createRoot(el);

// create a component
function App(){
    return <h1>Hi there!</h1>;
}

//show on the screen
root.render(<App />);