import React, { createContext, useState } from 'react'

import { Counter } from './Counter'

export const Context = createContext()

const Provider = ({ children }) => {
  const [text, setText] = useState('')
  return (
    <Context.Provider value={{ text, setText }}>{children}</Context.Provider>
  )
}

export const App = () => {
  return (
    <Provider>
      <Counter />
    </Provider>
  )
}
