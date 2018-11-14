import React, { createContext, useReducer } from 'react'

import { Counter } from './Counter'

export const Context = createContext()

export const UPDATE_TEXT = 'update-text'
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const RESET = 'reset'

const initialState = {
  text: '',
  count: 0,
}

const defaultValue = 10

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT: {
      return { ...state, text: action.payload }
    }
    case INCREMENT: {
      return { ...state, count: state.count + 1 }
    }
    case DECREMENT: {
      return { ...state, count: state.count - 1 }
    }
    case RESET: {
      return { ...state, count: action.payload }
    }
    default: {
      return state
    }
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, {
    type: RESET,
    payload: defaultValue,
  })
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const App = () => {
  return (
    <Provider>
      <Counter />
    </Provider>
  )
}
