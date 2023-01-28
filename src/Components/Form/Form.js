import React from 'react'

export default function Form() {

    const [formData, setFormData] = React.useState(
            {
                firstName: "",
                lastName: "",
                email: "",
                comments: "",
                isFriendly: true,
                employment: "",
                favColor: ""
            }
    )

    function handleChange(event){ 
        const {name, value, type, checked} = event.target
        setFormData(prevForm => { 
            return { 
                ...prevForm,
                [name]: type === "checkbox" ? checked : value,
            }
        })

    }

    console.log(formData.employment);

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} method='POST' id='my-form'>
            <input type="text" placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} />
            <input type="text" placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
            <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange}  />
            <textarea name='comments' value={formData.comments}  onChange={handleChange}/>

            <input 
            type="checkbox" 
            name="isFriendly"  
            id='isFriendly' 
            checked={formData.isFriendly}
            onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employee status</legend>
                <input type="radio" name="employment" id="unemployed" value ='unemployed' onChange={handleChange} checked = {formData.employment === 'unemployed'}/>
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input type="radio" id='part-time' name='employment' value ='part-time' onChange={handleChange} checked = {formData.employment === 'part-time'} />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input type="radio" id='full-time' name='employment' value ='full-time' onChange={handleChange} checked = {formData.employment === 'full-time'}/>
                <label htmlFor="full-time">Full-time</label>
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select name="favColor" id="favColor" value={formData.favColor} onChange={handleChange}>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yelllow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Send it in</button>
        </form>
    </div>
  )
}
