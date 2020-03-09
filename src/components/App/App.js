import React,{Component} from 'react';
import './App.css';
import Intro from '../Intro/Index.js';
import 'fetch';
import Main from '../Main/index.js';
import Series from '../../containers/Series/index.js';


class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TV Series List
        </p>
      </header>
      <Main />
    </div>
  )
}
}
export default App;
