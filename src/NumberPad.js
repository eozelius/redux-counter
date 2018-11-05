import React from 'react'
import CalculatorButton from './CalculatorButton'

const NumberPad = (props) => {
  const numbers = [9,8,7,6,5,4,3,2,1,0, '.']
  return(
    <div className='numberPadContainer'>
      { numbers.map((n, i) => <CalculatorButton onClick={props.handleNumber} display={n} key={i} />) }
    </div>
  )
}

export default NumberPad
