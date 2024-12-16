import React, { useState } from 'react'

const FormCard = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        occupation: "",
        textArea: "",
        email: "",
        password: "",
        employmentStatus: "",
        dietaryRestrictions: true
    })

    const handleChange = (event) => {
        setFormData((details) => {
            const {name, value, type, checked } = event.target

            return {
                ...details,
                [name]: type === "checkbox" ? checked : value
            }
        } )
    }


  return (
    <div className='profilediv'>
        <h2>Practicing React Forms</h2>
        <label htmlFor="firstName">First Name: </label>
        <input id="firstName" type="text" placeholder='First name' name="firstName" 
                onChange={handleChange} value={formData.firstName} /> <br />

        <label htmlFor="lastName">Last Name: </label>
        <input type="text" placeholder='Lastname' name="lastName"       
                onChange={handleChange} value={formData.lastName} /> <br />

        <label htmlFor="occupation">Occupation: </label>
        <input type="text" placeholder='Occupation' name="occupation" 
                onChange={handleChange} value={formData.occupation}/> <br />

        <label htmlFor="email">Email: </label>
        <input id="email" onChange={handleChange} type="email" name="email" placeholder="joe@schmoe.com" /> <br />

        <label htmlFor="password">Password: </label>
        <input id="password" onChange={handleChange} defaultValue="password123" type="password" name="password" /> <br />

        <label htmlFor="textArea">Text Area: </label> <br />
        <textarea name="textArea" id="textArea" cols="30" rows="10"
                onChange={handleChange} value={formData.textArea} />

        <fieldset>
          <legend>Employment Status: </legend>
            <label>
                <input type="radio" name="employmentStatus" />
                Unemployed
            </label> <br />
            <label>
                <input type="radio" name="employmentStatus" />
                Part-time
            </label> <br />
            <label>
                <input type="radio" name="employmentStatus" />
                Full-time
            </label>
        </fieldset>

        <fieldset>
            <legend>Dietary restrictions:</legend>
            <label>
                <input type="checkbox" name="dietaryRestrictions" value="kosher" />
                Kosher
            </label>
            <label>
                <input type="checkbox" name="dietaryRestrictions" value="vegan" />
                Vegan
            </label>
            <label>
                <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
                Gluten-free
            </label>
        </fieldset>


        <p>Firstname: {formData.firstName}</p>
        <p>lastname: {formData.lastName}</p>
        <p>Occupation: {formData.occupation}</p>
        
    </div>
  )
}

export default FormCard