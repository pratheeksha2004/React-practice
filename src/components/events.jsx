function Myform(){
    const handleEvent=(event)=>{
        event.preventDefault();
        console.log("form submitted",event.target);
    }
    return(
        <>
        <form onSubmit={handleEvent}>
            <button type="submit">submit</button>
        </form>
        </>
    );
}
export default Myform;