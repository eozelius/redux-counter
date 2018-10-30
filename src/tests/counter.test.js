import React from 'react'
import { Counter } from '../Counter'

describe(Counter, () => {
  it('renders properly', () => {
    const counter = shallow(<Counter  />)
    expect(counter).toMatchSnapshot()
  })

  it('has an initial count of 0', () => {
    const counter = mount(<Counter count={0} />)
    expect(counter).toMatchSnapshot()
    expect(counter.prop('count')).toEqual(0)
  })
})
