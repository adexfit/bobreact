import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'
import FormCard from './components/FormCard'
import { UserProvider } from './context/UserContext'
import Login from './components/Login'
import Count from './components/Count'

function App() {
  const [profiledata, setProfiledata] = useState({
    name: 'Adeboye Elisha',
    role: 'Frontend Developer',
    age: '50years',
    country: 'United States',
    employed: true 
  })

  return (
    <>
      <Count />      
      <ProfileCard profileDetails = {profiledata} parentFunc = {setProfiledata} />
      <br />
      <FormCard />
      <UserProvider>
        <Login />
      </UserProvider>

    </>
  )
}

export default App
