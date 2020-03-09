import React from 'react'

//functional components-
//javascript functions returning jsx or react elements
//User defined components will always begin with capital letters
//props acts like paramters to the function. They are  like properties of a javascript object 
const Intro = (props)=>(
    <p className="App-Intro">
{props.message} ----> Not {props.pass}  movies    </p>
  )
  
  export default Intro;