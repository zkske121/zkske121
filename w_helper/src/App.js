import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import createStore from './store/createStore';
import Home from './containers/home';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
