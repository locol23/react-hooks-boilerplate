import React, { useReducer } from 'react'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const RESET = 'reset'

const initialState = { count: 0 }
const defaultValue = 10

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { count: state.count + 1 }
    }
    case DECREMENT: {
      return { count: state.count - 1 }
    }
    case RESET: {
      return { count: action.payload }
    }
    default: {
      return state
    }
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState, {
    type: RESET,
    payload: defaultValue,
  })

  return (
    <div>
      <h1>React Hooks (useReducer)</h1>
      <div>{state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: INCREMENT })}>increment</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>decrement</button>
        <button
          onClick={() => dispatch({ type: RESET, payload: defaultValue })}
        >
          reset
        </button>
      </div>
    </div>
  )
}
