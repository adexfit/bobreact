import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import FormCard from './components/FormCard'

function App() {
  const [count, setCount] = useState(0)
  const [profiledata, setProfiledata] = useState({
    name: 'Adeboye Elisha',
    role: 'Frontend Developer',
    age: '50years',
    country: 'United States',
    employed: true 
  })

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

  const manageStaff = () => {
      setProfiledata((employState)=> {
          return {...employState, employed: !employState.employed}
      })
  }

  const sayHi = () => {
    alert("I am working")
    
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

      <div>
        <ProfileCard profileDetails = {profiledata} parentFunc = {sayHi} />
        <br />
        <button onClick={manageStaff}>{profiledata.employed ? 'Fire staff' : 'Hire staff'}</button>
      </div>
      <br />

      <FormCard />

    </>
  )
}

export default App
