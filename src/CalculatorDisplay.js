import React from 'react'

const CalculatorDisplay = (props) => {
  return (
    <div className='displayContainer'>
      <h1>{props.number}</h1>
    </div>
  )
}

export default CalculatorDisplay
