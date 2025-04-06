import React,{useState} from 'react';
function EvenetError(){
    const[message,setMessage]=useState('');
    const handleClick=()=>{
        try{
            let riskydata=JSON.parse("{malformaed json}");
            setMessage('success!!!!');
        }
        catch(error){
            console.error("error in handleclick",error);
            setMessage(`failed to process click${error.message}`);
        }
    };
    return (
        <div>
            <button onClick={handleClick}>Clickk me</button>

            {message && <p>{message}</p>}
        </div>
    )
}
export default EvenetError;