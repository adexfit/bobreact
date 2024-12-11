import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseNum = () => {
      setCount((counter) => {
        return counter = counter + 1
      } )
  }

  const reduceNum = () => {
    setCount((counter) => {
      return counter = counter - 1
    } )
  }

  return (
    <>
      <div>
        <p>
          Hello world, i am learning react
        </p>
      </div>
      <h1>Our count is {count} </h1>
      <div className="card">
        <button onClick={increaseNum} className='btn-left'>
          Plus one 
        </button>

        <button onClick={reduceNum}>
          minus one 
        </button>
      </div>

    </>
  )
}

export default App
