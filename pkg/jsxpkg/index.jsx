//styles first please
import './../../node_modules/minireset.css/minireset.sass';
import styles from './../css/app.css';
import corestyles from './../scss/core.scss';

//react stuff
import React from 'react';
import {render} from 'react-dom';

//gud2.GO!
import AwesomeComponent from './AwesomeComponent.jsx';

//root Component
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
