import React from 'react';
function Keys({user}){
    if(!user||user.length===0){
        return <><p>No users to display</p></>
    }
    const listItems=user.map((ur)=>(
         <li key={ur.id}>
            {ur.name} (Id:{ur.id})
         </li>
    ));
    return (
        <>
        {listItems}
        </>
    )
}
export default Keys;