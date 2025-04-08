import { useState,useEffect } from 'react'

import './App.css'

function App() {
    const [val,setVal]=useState(()=>{return localStorage.getItem('val') || (''); });
    useEffect(()=>{
        if(val!==''){
          localStorage.setItem('val',val);
        }
    },[val]);
    const handlechange=(e)=>{
       setVal(e.target.value);
    };


  return (
    <>
        <input
        data-testid='input-id'
        type="text"
        value={val} // Bind the input value to the state
        onChange={handlechange} // Update state and localStorage on every change
      />
      
    </>
  )
}

export default App
