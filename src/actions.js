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

export function asyncIncDec(incOrDec){
  return function(dispatch){
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('resolving successfully')
      }, 800)
    })
    .then((response) => {
      if(incOrDec === 'increment'){
        dispatch(incrementCounter())
      } else if(incOrDec === 'decrement'){
        dispatch(decrementCounter())
      } else {
        console.log("error: Increment or Decrement must be defined")
        return
      }
    })
    .catch((error) => { console.log("error: " + error) })
  }
}
