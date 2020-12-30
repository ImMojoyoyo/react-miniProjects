/*
     Snippets -> rafcp
*/

import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Styles
import './app.css';

const CounterApp = ({ value }) => {

    // useState
    const [ counter , setCounter   ] = useState( 0 );
    
    



    // handleAdd
    const handleAdd = (e) => {setCounter( counter + 1 )};
    // RESET
    const resetAdd = (e) => {setCounter( value ) };
    // substractionAdd
    const substractionAdd = (e) => { setCounter( counter - 1 )};

    return (
        <div id="container">
            <h1>Counter App</h1>
            <h4>{ counter }</h4>
            <div id="contButt">
                <button onClick = { handleAdd }>+1</button>
                <button onClick = { () => { setCounter(value)}}>RESET</button>
                <button onClick = { substractionAdd }>-1</button>
            </div>
        </div>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp
