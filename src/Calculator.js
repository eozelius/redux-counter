import React, { Component } from 'react'
import './styles/Calculator.sass'
import NumberPad from './NumberPad'
import CalculatorDisplay from './CalculatorDisplay'
import OperatorPad from './OperatorPad'

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstNum: '',
      secondNum: '',
      operator: null,
      displayNum: ''
    }

    this.handleNumber = this.handleNumber.bind(this)
  }

  handleNumber(e){
    let number = `${this.state.displayNum}${e.target.innerText}`
    if(this.state.firstNum === ''){
      number = `${e.target.innerText}`
    }

    // user is inputing X
    if(this.state.operator === null){
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
      operator: null
    })
  }

  render(){
    return(
      <div className='calculatorContainer' >
        <CalculatorDisplay number={this.state.displayNum} />
        <NumberPad handleNumber={this.handleNumber} handleCalculate={this.calculate} />
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
