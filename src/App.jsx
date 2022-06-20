import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg'
import './App.css'
import { increment } from './Redux/store/slices/counter';

function App() {
    
  const {counter} = useSelector( state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            count is: {counter}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
