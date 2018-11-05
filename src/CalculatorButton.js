import React from 'react'

const CalculatorButton = (props) => {
  return (
    <div className='calcBtn' onClick={props.onClick}>
      {props.display}
    </div>
  )
}

export default CalculatorButton
