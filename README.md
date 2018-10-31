## React + Redux Counter!  

With a focus on Async Redux thunks and testing with Enzyme and Jest.

### Components
- *Counter* Component - redux connected component, renders the count, and 4 buttons to increment or decrement the count immediately or asynchronously.

### redux
- *Actions*
  I have 2 action creators (`incrementCounter()`, and `decrementCounter()`) for immediate incrementing or decrementing.  I also have an action creator `asyncIncDec(incOrDec)` that is used for asynchronous increment or decrement.

- *Reducers*
  I set my initialState in reducers and have just one counter reducer that increments or decrements the state.count.  Note this reducer is not concerned with synchronous or immediate.

- *Asynchronous Thunk*
  I use redux-thunk middleware, keeping my actions pure by returning a function, that returns a promise from the action creator that will be invoked by middleware.  If the promise resolves successfully, it will dispatch the immediate increment/decrement actions.

### Testing
- I am using Enzyme and Jest.
  - *Snapshot testing* - test rendered output of components.
  ```javascript
  const btn = shallow(<Button />)
  expect(btn).toMatchSnapshot()
  ```

  - *Props testing*
  ```javascript
  const counter = mount(<Counter count={0} />)
  expect(counter.prop('count')).toEqual(0)
  ```

  - *Events testing*
  ```javascript
  const handleClick = jest.fn()
  const btn = shallow(<Button handleClick={handleClick} />)
  btn.simulate('click', {})
  expect(handleClick).toBeCalled()
  ```

  - *Redux Testing*
    - Actions
  ```javascript
  const expectedAction = [{
    type: INCREMENT
  }]
  store.dispatch(incrementCounter())
  expect(store.getActions()).toEqual(expectedAction)
  ```
    - Reducers
  ```javascript
  const initialState = { count: 0 }
  const action = incrementCounter()
  const expectedState = {
    count: 1
  }
  expect(counterReducer(initialState, action)).toEqual(expectedState)

  ```
