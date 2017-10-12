import React, { Component } from 'react';
import './App.css';
import Root from './components/Root';
import history from './history'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'
import store from './redux';

class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <ConnectedRouter history={history}>
        <Root></Root>
       </ConnectedRouter>
     </Provider>
    );
  }
}

export default App;
