import react, { useState } from 'react';
function Functional(){
 const[count,setCount]=useState(0);
 const handleIncre=()=>{
      setCount(count+1);
 }
 const handleZero=()=>{
    setCount(0);
 }
    return(
          <>
    <button onClick={handleIncre}>Incremenet</button>
    
    <button onClick={handleZero}>Zero</button>
    <p>{count}</p>
          </>
    );
}
export default Functional;