import React, { Component } from 'react'
import Button from './shared/Button'
import { incrementCounter, decrementCounter } from './actions.js'
import { connect } from 'react-redux'


class Counter extends Component {
  render(){
    return (
      <div className='counter'>
        <div className='count'>
          <h2>Counter</h2>
          {this.props.count}
        </div>

        <div className='mutate-count'>
          <Button className='increment-btn' handleClick={this.props.increment}>Increment</Button>
          <Button className='decrement-btn' handleClick={this.props.decrement}>Decrement</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
