import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import Counter from './Counter'
import rootSaga from './sagas'
import { decrease, increase } from './reducer'
import reducer from './reducer'
import logo from './logo.svg'
import './App.css'

const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch(type)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React - Redux - Redux Saga</h2>
          </div>
          <Counter 
            onIncrement={() => action(increase())}
            onDecrement={() => action(decrease())}
          />
        </div>
      </Provider>
    )
  }
}

export default App
