import React from 'react'
import reactLogo from '../assets/react.svg'
// import '../App.css'

const ProfileCard = (props) => {
  const {profileDetails, parentFunc} = props
  const manageStaff = () => {
      parentFunc((employState)=> {
        return {...employState, employed: !employState.employed}
    })
  }

  const sayHi = () => {
    alert("I am working")
    
  }


  return (
    <div className='profilediv'>
        <h2>My Profile</h2>
        <img src={reactLogo} alt="skill logo" />
        <p>{`Name: ${profileDetails.name}`}</p>
        <p>{`Role: ${profileDetails.role}`}</p>
        <p>{`Age: ${profileDetails.age}`}</p>
        <p>{`Country: ${profileDetails.country}`}</p>
        <p>Status: <span style={profileDetails.employed ? {color: 'green'} : {color: 'red'}}>{ profileDetails.employed ? 'Employed' : 'Unemployed' }</span></p>
        <button onClick={sayHi}>Test an hidden code</button>

        <br />
        <button onClick={manageStaff}>
          {profileDetails.employed ? 'Fire staff' : 'Hire staff'}
        </button>

    </div>
  )
}

export default ProfileCard