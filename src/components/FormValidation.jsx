import React,{useState} from 'react';
function FormValid(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [errors,setErrors]=useState({});
    const validate=()=>{
        const newErrors={};
        if(!name){
            newErrors.name='name is required';
        }
        if(!email){
            newErrors.email='email is required';
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email='invalid email';
        }
        return newErrors;
    };
    const handleChange=(event)=>{
        const{name,value}=event.target;
        if(name==='name')setName(value);
        if(name==='email')setEmail(value);
    };
  const handleSubmit=(event)=>{
    event.preventDefault();
    const validationErros=validate();
    setErrors(validationErros);
      if(Object.keys(validationErrors).length===0){
        alert(`form submitted successsfully ${name},${email}`);
        setName('');
        setEmail('');
        setErrors({});
      }else{
        alert('please fix the errors in the form')
      }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Validated Controlled Form</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name" // Use name attribute for easier handling
          value={name}
          onChange={handleChange}
        />
        {/* Display error message if exists */}
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
    

}
export default FormValid;