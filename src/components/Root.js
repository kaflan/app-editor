import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Navigation from './Routes/Navigation';

class Root extends Component {
  render() {
    // debugger;
    return(
      <div>
        <Route path="/" component={Navigation}>
        </Route>
      </div>
    );
  }
}
export default Root;