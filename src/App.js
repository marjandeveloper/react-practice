import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [isdisable, setIsdisable] = useState(true)
  useEffect(() => {
    if (!isdisable) {
      setTimeout(() => {
        setCount((count) => count + 1)
      }, 1000)
    } else {
      setCount(count)
    }
  })
  const changeStatus = (e) => {
    e.preventDefault()

    if (e.currentTarget.textContent === 'Start') {
      setIsdisable(false)
    } else {
      setIsdisable(true)
    }
  }

  return (
    <div className='App'>
      <button onClick={changeStatus}>Start</button>
      <button onClick={changeStatus}>Stop</button>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default App
