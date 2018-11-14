import { combineReducers } from 'redux'

export const UPDATE_TEXT = 'text/update-text'
export const INCREMENT = 'counter/increment'
export const DECREMENT = 'counter/decrement'
export const RESET = 'counter/reset'

const initialTextState = {
  value: '',
}

const text = (state = initialTextState, action) => {
  switch (action.type) {
    case UPDATE_TEXT: {
      return { value: action.payload }
    }
    default: {
      return state
    }
  }
}

const initialCounterState = {
  value: 0,
}

const counter = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { value: state.value + 1 }
    }
    case DECREMENT: {
      return { value: state.value - 1 }
    }
    case RESET: {
      return { value: action.payload }
    }
    default: {
      return state
    }
  }
}

export const rootReducer = combineReducers({ text, counter })
