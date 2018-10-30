// Action types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// Action Creators
export const incrementCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT
  }
}
