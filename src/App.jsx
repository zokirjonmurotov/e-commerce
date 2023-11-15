import { useState } from 'react'
import Home from './Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1>App</h1>
  <Home />
  </>
  )
}

export default App
