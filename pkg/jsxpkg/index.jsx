import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import styles from './../css/app.css';
import corestyles from './../scss/core.scss';

class App extends React.Component {
  render () {
    return (
      <div className="red">
        <p className="blue">Hello React!</p>
        <p className="blue red">Hello React!</p>
        <AwesomeComponent/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
