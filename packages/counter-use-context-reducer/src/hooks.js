import { useContext, useCallback, useMemo } from 'react'

import { UPDATE_TEXT, INCREMENT, DECREMENT, RESET } from './reducer'
import { Context } from './components/App'

export const useTextContext = () => {
  const { state, dispatch } = useContext(Context)

  const text = useMemo(() => state.text.value, [state.text.value])

  const updateText = useCallback(
    text => dispatch({ type: UPDATE_TEXT, payload: text }),
    [dispatch]
  )

  return [text, updateText]
}

export const useCounterContext = () => {
  const { state, dispatch } = useContext(Context)

  const count = useMemo(() => state.counter.value, [state.counter.value])

  const increment = useCallback(() => dispatch({ type: INCREMENT }), [dispatch])
  const decrement = useCallback(() => dispatch({ type: DECREMENT }), [dispatch])
  const reset = useCallback(num => dispatch({ type: RESET, payload: num }), [
    dispatch,
  ])

  return [count, increment, decrement, reset]
}
