import React, { useState } from 'react'

const FormCard = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        occupation: "",
        textArea: ""
    })

    const handleChange = (event) => {
        setFormData((details) => {
            return {
                ...details,
                [event.target.name]: event.target.value
            }
        } )
    }


  return (
    <div className='profilediv'>
        <h2>Practicing React Forms</h2>
        <input type="text" placeholder='Firstname' name="firstName" 
                onChange={handleChange} value={formData.firstName} /> <br />     
        <input type="text" placeholder='Lastname' name="lastName"       
                onChange={handleChange} value={formData.lastName} /> <br />
        <input type="text" placeholder='Occupation' name="occupation" 
                onChange={handleChange} value={formData.occupation}/> <br /><br />
        <textarea name="textArea" id="textArea" cols="30" rows="10"
                onChange={handleChange} value={formData.textArea} />

        <p>Firstname: {formData.firstName}</p>
        <p>lastname: {formData.lastName}</p>
        <p>Occupation: {formData.occupation}</p>
    </div>
  )
}

export default FormCard