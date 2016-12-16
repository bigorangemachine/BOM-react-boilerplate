import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
//import styles from './../css/app.css'
// import corestyles from './../scss/core.scss'
// ES5
// require('./../css/app.css');
// require('./../scss/core.scss');
class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello React!</p>
        <AwesomeComponent/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
