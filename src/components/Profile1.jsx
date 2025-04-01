import { useState } from "react";

function Profile1(){
      const[name,setName]=useState("prathee");
      const[editing,isEditing]=useState(false);
      const handleNameChange=(event)=>{
           setName(event.target.value);
      }
      const toggleedit=()=>{
        isEditing(!editing);
      }
      return (
        <>
           <button onClick={toggleedit}>{isEditing?"savesss":"editing"}</button>
           {isEditing && <input type="text" value={name} onChange={handleNameChange}/>}
        </>
      )

}

export default Profile1;