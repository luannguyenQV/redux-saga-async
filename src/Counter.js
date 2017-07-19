import React from 'react'
import { connect } from 'react-redux'
import './counter.css'

function Counter ({ count, onIncrement, onDecrement }) {
  return (
    <div className='container'>
      <div className='counter'>{count}</div>
      <button onClick={() => onIncrement()}>INCREASE</button>
      <button onClick={() => onDecrement()}>DECREASE</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter)