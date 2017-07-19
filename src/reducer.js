import { createAction, handleActions } from 'redux-actions'

export const increase = createAction('INCREMENT')
export const decrease = createAction('DECREASE')

const defaultState = {
  count: 0
}

const handlers = {
  [increase]: (state, action) => ({ count: state.count + 1 }),
  [decrease]: (state, action) => ({ count: state.count - 1 })
}

export default handleActions(handlers, defaultState)