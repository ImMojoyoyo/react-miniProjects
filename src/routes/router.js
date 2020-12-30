/*
    Here, in this file. Will be the container that we will have 
    to import our components and show all in the browser.
    We will going to export this file and the we could import this file
    inside of the index.js

*/


// We will create this file like a general component.
import React from 'react';

// We import the dependences of react-router-dom
/*
    This import will create routers and jumps
    inside of our website.
*/
import {BrowserRouter, Route, Switch} from 'react-router-dom';



// Import of the components.
import CounterApp from '../components/primer-comp/CounterApp'


class Router extends React.Component{
    render(){
        return(
            // Here we left the configuration of routes and pages.
            <BrowserRouter>
                <Switch>
    
                    <Route path ="**" component= { CounterApp }></Route>
                    
                
                </Switch>
            </BrowserRouter>

            


            
    
    
        );
    }
    
}

export default Router;