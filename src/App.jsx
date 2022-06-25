import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg'
import './App.css'
import { increment, decrement, incrementBy } from './Redux/store/slices/counter';

function App() {
    
  const {counter} = useSelector( state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>count is: {counter}</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            Increment
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </p>
        <p>
          <button type="button" onClick={() => dispatch(incrementBy(3))}>
            increment by 3
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
