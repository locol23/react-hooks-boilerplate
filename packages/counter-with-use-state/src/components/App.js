import React, { useState, useEffect, useCallback } from 'react'

export const App = () => {
  const [text, setText] = useState('')

  const useCount = (init = 0) => {
    const [count, setCount] = useState(init)
    const increment = useCallback(() => setCount(count + 1), [count])
    const decrement = useCallback(() => setCount(count - 1), [count])
    const reset = useCallback(() => setCount(0), [count])

    return [count, increment, decrement, reset]
  }

  const [count, increment, decrement, reset] = useCount(0)

  useEffect(() => setText('React Hooks'), [])

  return (
    <div>
      <h1>{text}</h1>
      <div>{count}</div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}
