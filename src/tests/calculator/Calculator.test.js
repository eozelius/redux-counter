import Calculator from '../../Calculator'
import React from 'react'
import CalculatorButton from '../../CalculatorButton'

describe(Calculator, () => {
  test('mounts properly', () => {
    const calc = shallow(<Calculator />)
    expect(calc).toMatchSnapshot()
  })

  test('initial state', () => {
    const expectedState = {
      firstNum: '',
      secondNum: '',
      operator: null,
      displayNum: '',
      complete: false
    }
    const calc = shallow(<Calculator />)
    expect(calc.state()).toEqual(expectedState)
  })

  test('it handles number input', () => {
    const calc = mount(<Calculator />)
    const nine = calc.find(CalculatorButton).at(2)
    nine.simulate('click', {
      target: {
        innerText: nine.prop('display')
      }
    })
    expect(calc.state('firstNum')).toEqual(nine.prop('display').toString())
  })

  test('it handles operator input', () => {
    const calc = mount(<Calculator />)
    const divide = calc.find('.operatorContainer .calcBtn').last()
    divide.simulate('click', {
      target: {
        innerText: divide.prop('children')
      }
    })
    expect(calc.state('operator')).toEqual(divide.prop('children').toString())
  })

  test('handles Number input', () => {
    const spy = jest.spyOn(Calculator.prototype, 'handleNumber')
    const calc = mount(<Calculator />)
    const nine = calc.find('.calcBtn').at(1)
    nine.simulate('click', {target: { innerText: nine.prop('display') }})
    expect(spy).toHaveBeenCalled()
  })

  test('it calculates result', () => {
    const calc = mount(<Calculator />)
    const nine = calc.find(CalculatorButton).at(1)
    const divide = calc.find('.operatorContainer .calcBtn').last()
    const equal = calc.find('.executeResult').first()
    nine.simulate('click', {target: { innerText: nine.prop('display') }})
    divide.simulate('click', {target: {innerText: divide.prop('children')}})
    nine.simulate('click', {target: { innerText: nine.prop('display') }})
    equal.simulate('click')
    expect(calc.state('displayNum')).toEqual('1')
    expect(calc.state('complete')).toEqual(true)
  })

  test('it resets state after "=" button pressed', () => {
    const calc = mount(<Calculator />)
    calc.setState({
      complete: true
    })
    const nine = calc.find(CalculatorButton).at(1)
    const expectedState = {
      firstNum: '9',
      secondNum: '',
      operator: null,
      displayNum: '9',
      complete: false
    }
    nine.simulate('click', {target: { innerText: nine.prop('display') }})
    expect(calc.state()).toEqual(expectedState)
  })
})
