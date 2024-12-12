import React from 'react'
import reactLogo from '../assets/react.svg'
// import '../App.css'

const ProfileCard = (props) => {
    console.log(props)

  return (
    <div className='profilediv'>
        <h2>My Profile</h2>
        <img src={reactLogo} alt="skill logo" />
        <p>{`Name: ${props.profileDetails.name}`}</p>
        <p>{`Role: ${props.profileDetails.role}`}</p>
        <p>{`Age: ${props.profileDetails.age}`}</p>
        <p>{`Country: ${props.profileDetails.country}`}</p>
        <p>Status: <span style={props.profileDetails.employed ? {color: 'green'} : {color: 'red'}}>{ props.profileDetails.employed ? 'Employed' : 'Unemployed' }</span></p>
        <button onClick={props.parentFunc}>Test an hidden code</button>

    </div>
  )
}

export default ProfileCard