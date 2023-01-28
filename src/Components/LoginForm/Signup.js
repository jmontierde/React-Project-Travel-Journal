import React from 'react'

export default function Signup() {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        join: true,
    });  


    function handleChange(event){
        const {name, value, type, checked} = event.target;

        setFormData(prevFormData => { 
            return { 
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }
    console.log(formData.join);
    function handleSubmit(e){ 
        e.preventDefault();
        if(formData.password === formData.confirmPassword){
            console.log("Successfully signed up");
        }else {
            console.log("Password do not match");
            return
        }
        if(formData.join){
            console.log("Thanks for signing up for our newsletter!");
        }
    }

  return (
    <div>
        <form action="" >
            <input type="email" name="email" placeholder='Email' value= {formData.email} onChange={handleChange}/>
            <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
            <input type="password" name="confirmPassword" placeholder='Confirm Password' value= {formData.confirmPassword} onChange={handleChange} />
            <input type="checkbox" name="join" id="join" value='join' checked = {formData.join} onChange={handleChange}/>
            <button onSubmit={handleSubmit}>Signup</button>
        </form>
    </div>
  )
}
