import React from 'react'
import CalculatorDisplay from '../../CalculatorDisplay'

describe(CalculatorDisplay, () => {
  it('mounts properly', () => {
    const display = shallow(<CalculatorDisplay />)
    expect(display).toMatchSnapshot()
  })
})
