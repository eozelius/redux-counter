import React, { Component } from 'react'
import Button from './shared/Button'

class Counter extends Component {
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement(){
    const count = this.state.count + 1
    this.setState({
      count: count
    })
  }

  handleDecrement(){
    const count = this.state.count - 1
    this.setState({
      count: count
    })
  }

  render(){
    return (
      <div className='counter'>
        <div className='count'>
          <h2>Counter</h2>
          {this.state.count}
        </div>

        <div className='mutate-count'>
          <Button className='increment-btn' handleClick={this.handleIncrement}>Increment</Button>
          <Button className='decrement-btn' handleClick={this.handleDecrement}>Decrement</Button>
        </div>
      </div>
    )
  }
}

export default Counter
