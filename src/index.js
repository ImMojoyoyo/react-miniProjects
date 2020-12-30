// REACT import from 'react'
import React from 'react';

// ReactDOM import from 'react-dom'
import ReactDOM from 'react-dom';


// Import the Router component.
import Router from './routes/router';
import CounterApp from './components/primer-comp/CounterApp';





/* Import from HTML file. This div will be the component that show 
the rest of the components in the browser.*/
const divRoot = document.querySelector('#root');




ReactDOM.render(
    <CounterApp  value = {0}/>,
    divRoot // Import from constant.
)