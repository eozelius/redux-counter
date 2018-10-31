import React, { Component } from 'react';
import Counter from './Counter'
import './App.css';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

class App extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App
