import React, { useReducer } from 'react'
import styled from 'styled-components'

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
    <Layout>
      <h1>React Hooks (useReducer)</h1>
      <Text>{state.count}</Text>
      <div>
        <Button onClick={() => dispatch({ type: INCREMENT })}>increment</Button>
        <Button onClick={() => dispatch({ type: DECREMENT })}>decrement</Button>
        <Button
          onClick={() => dispatch({ type: RESET, payload: defaultValue })}
        >
          reset
        </Button>
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
