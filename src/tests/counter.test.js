import React from 'react'
import { Counter } from '../Counter'
// import configureStore from '../configureStore'
// import ConnectedCounter from '../Counter'

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

  // it.only('maps the "increment()" dispatch to props', () => {
  //   const store = configureStore()
  //   const counter = mount(<ConnectedCounter store={store} />)
  //
  //   // Definitely room for improvement.  I need to figure out how to inspect the dispatches that are being mapped to props.  Right now I only know that props.dispatch is a function.
  //   expect(counter.prop('store')['dispatch']).not.toEqual(undefined)
  // })
})
