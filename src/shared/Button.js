import React, { Component } from 'react'

class Button extends Component {
  render(){

    return (
      <button onClick={this.props.handleClick} style={{ margin: '5%' }}>{this.props.children}</button>
    )
  }
}

export default Button
