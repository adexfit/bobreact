import React from 'react'
import { useState } from 'react'

const Count = () => {
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
    <h1>Our count is: {count} </h1>
    <div className="card">
        <button onClick={increaseNum} className='btn-left'>
        Increase count 
        </button>

        <button onClick={reduceNum}>
            Decrease count 
        </button>
    </div>
  </>
  )
}

export default Count