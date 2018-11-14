import React, { useReducer, useEffect, createContext } from 'react'

import { useTextContext, useCounterContext } from '../hooks'
import { rootReducer, RESET } from '../reducer'

export const Context = createContext()

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, undefined, {
    type: RESET,
    payload: 0,
  })
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

const Header = () => {
  const [text, updateText] = useTextContext()
  useEffect(() => updateText('React Hooks(useContext & useReducer)'), [])

  return <h1>{text}</h1>
}

const Counter = () => {
  const [count, increment, decrement, reset] = useCounterContext()
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => reset(0)}>reset</button>
    </div>
  )
}

export const App = () => {
  return (
    <Provider>
      <Header />
      <Counter />
    </Provider>
  )
}
