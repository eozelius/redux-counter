import React, { Component } from 'react'
import './styles/Calculator.sass'
import NumberPad from './NumberPad'
import CalculatorDisplay from './CalculatorDisplay'
import OperatorPad from './OperatorPad'
import CalculatorButton from './CalculatorButton'

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstNum: '',
      secondNum: '',
      operator: null,
      displayNum: '',
      complete: false
    }
  }

  handleNumber = (e) => {
    if(this.state.complete){
      const number = `${e.target.innerText}`
      this.setState({
        displayNum: number,
        firstNum: number,
        complete: false
      })
      return
    }

    // user is inputing X
    if(this.state.operator === null){
      const number = `${this.state.displayNum}${e.target.innerText}`
      this.setState({
        displayNum: number,
        firstNum: number
      })
    // User is inputing Y
    } else {
      const secondNum = `${this.state.secondNum}${e.target.innerText}`
      this.setState({
        secondNum: secondNum,
        displayNum: secondNum
      })
    }
  }

  handleOperator = (e) => {
    this.setState({
      operator: e.target.innerText
    })
  }

  calculate = () => {
    const x = parseFloat(this.state.firstNum)
    const y = parseFloat(this.state.secondNum)
    const op = this.state.operator
    const result = calculateResult(x, y, op)

    this.setState({
      displayNum: `${result}`,
      firstNum: '',
      secondNum: '',
      operator: null,
      complete: true
    })
  }

  render(){
    return(
      <div className='calculatorContainer' >
        <CalculatorDisplay number={this.state.displayNum} />
        <CalculatorButton className='executeResult' onClick={this.calculate} display='=' />
        <NumberPad handleNumber={this.handleNumber} />
        <OperatorPad handleOperator={this.handleOperator} />
      </div>
    )
  }
}

export function calculateResult(x, y, op){
  switch(op){
    case '+':
      return x + y
    case '-':
      return x - y
    case '/':
      return x / y
    case '*':
      return x * y
    default:
      // throw('operator must be "+", "-", "/" or "*"')
      return false
  }
}

export default Calculator
