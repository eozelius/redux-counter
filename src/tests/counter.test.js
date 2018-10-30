import React from 'react'
import Counter from '../Counter'
// import Button from '../shared/Button'

describe(Counter, () => {
  it('renders properly', () => {
    const counter = shallow(<Counter />)
    expect(counter).toMatchSnapshot()
  })

  it('has an initial state of {count: 0}', () => {
    const counter = shallow(<Counter />)
    expect(counter.state('count')).toEqual(0)
  })

  it('implements handleIncrement', () => {
    const counter = mount(<Counter />)
    const btn = counter.find('.increment-btn')
    btn.simulate('click')
    expect(counter.state('count')).toEqual(1)
  })

  it('implements handleDecrement', () => {
    const counter = mount(<Counter />)
    const btn = counter.find('.decrement-btn')
    btn.simulate('click')
    expect(counter.state('count')).toEqual(-1)
  })
})
