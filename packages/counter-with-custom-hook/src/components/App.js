import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

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
    <Layout>
      <h1>{text}</h1>
      <Text>{count}</Text>
      <div>
        <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
        <Button onClick={reset}>reset</Button>
      </div>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

const Text = styled.div`
  font-size: 20px;
  margin: 10px 0;
`

const Button = styled.button`
  margin: 5px 5px;
`
