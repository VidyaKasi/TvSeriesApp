import React from 'react';
//react-dom is the glue between react elements and the dom - to render the react elements
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//serviceworker loads app faster
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
//What a react,createelement does?
//Converts the jsx elements to react elements using the transpiler babbel 
//creating react element for the html content we want to render
//here we want to render h1 element 
//hence the first parameter is h1
//Second parametwe is the props we want to pass
//third is the value for the html element

//const greeting = React.createElement('h1',{},'Hello World' );

//trying the jsx way


//a function that returns current date
const getCurrentDate = () => {
    //creating a data object
    const date=new Date();
    //return the current date
    return date.toDateString();
}

const greeting = <h1> Hello World! Current date: {getCurrentDate()} </h1>;
 

//reactdom.render
//-->first parameter ---> react element we want to render
//second-parameter-->dom element inside index.html which we want to render
//ReactDOM.render(greeting, document.getElementById('root'));

ReactDOM.render(
    //Browser router the react dom router helps in keeping the UI in sync with the url
<BrowserRouter><App/></BrowserRouter>,
document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
