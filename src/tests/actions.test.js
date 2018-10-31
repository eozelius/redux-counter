import { INCREMENT, DECREMENT, incrementCounter, decrementCounter, asyncIncDec } from '../actions.js'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('redux Counter Actions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore({ count: 0 })

  beforeEach(() => {
    store.clearActions()
  })

  it('produces an Increment action', () => {
    const expectedAction = [{
      type: INCREMENT
    }]
    store.dispatch(incrementCounter())
    expect(store.getActions()).toEqual(expectedAction)
    expect(store.getActions()).toMatchSnapshot()
  })

  it('produces a decrement action', () => {
    const expectedAction = [{
      type: DECREMENT
    }]
    store.dispatch(decrementCounter())
    expect(store.getActions()).toEqual(expectedAction)
    expect(store.getActions()).toMatchSnapshot()
  })

  it('increments asynchronously using a thunk', () => {
    const expectedAction = [{
      type: INCREMENT
    }]
    return store.dispatch(asyncIncDec('increment'))
      .then((response) => {
        expect(store.getActions()).toEqual(expectedAction)
      })
  })

  it('decrements asynchronously using a thunk', () => {
    const expectedAction = [{
      type: DECREMENT
    }]
    return store.dispatch(asyncIncDec('decrement'))
      .then((response) => {
        expect(store.getActions()).toEqual(expectedAction)
      })
  })

  it('asynchronously returns an error if the argument is undefined', () => {
    const expectedAction = []
    return store.dispatch(asyncIncDec(undefined))
      .then((response) => {
        expect(store.getActions()).toEqual(expectedAction)
      })
  })
})
