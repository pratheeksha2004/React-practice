import React,{useRef} from 'react';
function UnControlled(){
    const nameInputRef=useRef(null);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const submittedName=nameInputRef.current.value;
        alert(`an name was submitted : ${submittedName}`);
        if(nameInputRef.current){
            nameInputRef.current.value='';
        }
    };
    return (
        <form onSubmit={handleSubmit}>
           <h2>Uncontrolled Form</h2>
          <label>
            Name:
            <input
              type="text"
              // 4. Set an initial value if needed (optional)
              defaultValue="Initial Name"
              // 2. Attach the ref to the DOM node
              ref={nameInputRef}
            />
          </label>
          <button type="submit">Submit</button>
           {/* Note: You don't have easy access to the live value here */}
        </form>
      );
}
export default UnControlled;