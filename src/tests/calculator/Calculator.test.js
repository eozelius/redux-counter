import Calculator from '../../Calculator'
import React from 'react'
import CalculatorButton from '../../CalculatorButton'
import NumberPad from '../../NumberPad'

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
    }
    const calc = shallow(<Calculator />)
    expect(calc.state()).toEqual(expectedState)
  })

  test('it handles number input', () => {
    const calc = shallow(<Calculator />)
    const btn = calc.find(NumberPad)
    btn.prop('handleNumber')({
      target: {
        innerText: '9'
      }
    })
    expect(calc.state('firstNum')).toEqual('9')
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
  })

  test('it resets state after "=" button is pressed', () => {
    const calc = mount(<Calculator />)
    const eight = calc.find(CalculatorButton).at(1)
    const expectedState = {
      firstNum: '8',
      secondNum: '',
      operator: null,
      displayNum: '8'
    }
    eight.simulate('click', {target: { innerText: '8' }})
    expect(calc.state()).toEqual(expectedState)
  })
})
