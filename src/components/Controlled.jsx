import react from 'react';
import { useState } from 'react';
function Controlled(){
    const[name,setName]=useState('');
    const handleChange=(event)=>{
        console.log("input changed",event.target.value);
        setName(event.target.value);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`A name was submitted (from state): ${name}`);
        setName('');
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2>controlled form</h2>
            <label>Name: <input type="text" value={name} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
            <p>Current state value:{name}</p>
        </form>
    );
}
export default Controlled;