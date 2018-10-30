// import combineReducers from 'redux'
import { INCREMENT, DECREMENT } from './actions'

const initialState = {
  count: 0
}

const counter = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT:
      return {
        count: ++state.count
      }
    case DECREMENT:
      return {
        count: --state.count
      }
    default:
      return state
  }
}

export default counter
