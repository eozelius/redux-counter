import React, { Component } from 'react';
import Counter from './Counter'
import './App.sass';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Calculator from './Calculator'

class App extends Component {
  render() {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <Calculator />
        </div>
      </Provider>
    );
  }
}

export default App
