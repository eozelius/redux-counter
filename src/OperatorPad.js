import React from 'react'
import CalculatorButton from './CalculatorButton'

const OperatorPad = (props) => {
  const operators = ['+', '-', '*', '/']
  return (
    <div className='operatorContainer'>
      { operators.map((o, i) => <CalculatorButton onClick={props.handleOperator} display={o} key={i} />) }
    </div>
  )
}

export default OperatorPad
