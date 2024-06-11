import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)   //this is a hook and says to make a state count and a function setCout to update calue of count

  return (
    <>
    <div>The count is {count}</div>
    <button onClick={()=>{setCount(count+1)}}>Update count </button>
    </>
  )
}

export default App
