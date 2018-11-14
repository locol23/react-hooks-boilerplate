import React, { useContext, useEffect, useMemo } from 'react'

import { Context, UPDATE_TEXT, INCREMENT, DECREMENT, RESET } from './App'

export const Counter = () => {
  const { state, dispatch } = useContext(Context)

  const text = useMemo(() => state.text, [state.text])
  const count = useMemo(() => state.count, [state.count])

  useEffect(
    () =>
      dispatch({
        type: UPDATE_TEXT,
        payload: 'React Hooks(useContext & useReducer)(simple)',
      }),
    []
  )

  return (
    <div>
      <h1>{text}</h1>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: INCREMENT })}>increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>decrement</button>
      <button onClick={() => dispatch({ type: RESET, payload: 0 })}>
        reset
      </button>
    </div>
  )
}
