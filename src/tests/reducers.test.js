import { INCREMENT, DECREMENT, incrementCounter, decrementCounter } from '../actions.js'
import counterReducer from '../reducers'

describe('redux Counter Actions', () => {
  it('defaults to the initial state', () => {
    const action = { type: 'dummy_action' }
    const initialState = { count: 0 }
    expect(counterReducer(undefined, action)).toEqual(initialState)
  })

  it('increments the count', () => {
    const initialState = { count: 0 }
    const action = incrementCounter()
    const expectedState = {
      count: 1
    }
    expect(counterReducer(initialState, action)).toEqual(expectedState)
    expect(counterReducer(initialState, action)).toMatchSnapshot()
  })

  it('decrements the count', () => {
    const initialState = { count: 0 }
    const action = decrementCounter()
    const expectedState = {
      count: -1
    }
    expect(counterReducer(initialState, action)).toEqual(expectedState)
    expect(counterReducer(initialState, action)).toMatchSnapshot()
  })

})
