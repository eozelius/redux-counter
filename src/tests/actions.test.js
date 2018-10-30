import configureStore from 'redux-mock-store'
import { INCREMENT, DECREMENT, incrementCounter, decrementCounter } from '../actions.js'

describe('redux Counter Actions', () => {
  const mockStore = configureStore();
  const store = mockStore();

  beforeEach(() => {
    store.clearActions()
  })

  it('produces an Increment action', () => {
    const expectedAction = [{
      type: INCREMENT
    }]
    store.dispatch(incrementCounter())
    expect(store.getActions()).toEqual(expectedAction)
  })

  it('produces a decrement action', () => {
    const expectedAction = [{
      type: DECREMENT
    }]
    store.dispatch(decrementCounter())
    expect(store.getActions()).toEqual(expectedAction)
  })
})
