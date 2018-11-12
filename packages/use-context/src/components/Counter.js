import React, { useContext, useEffect } from 'react'

import { Context } from './App'

export const Counter = () => {
  const { text, setText } = useContext(Context)

  useEffect(() => setText('React Hooks(useContext)'), [])

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
