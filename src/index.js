import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App';
require("babel-core/register");
require("babel-polyfill");
import './index.css'


class Appy extends Component {
 render() {
   return (
     <div><App/></div>
  )
}
}

ReactDOM.render(
React.createElement(Appy, {}, null),
document.getElementById('react-target')
);

// ReactDOM.render(<App />, document.getElementById('react-target'))
