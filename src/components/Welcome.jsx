import react from 'react';
import Greetings from './Greetings';
function Welcome(){
    return(
        <>
     {/*<Greetings/> */}   
     <Greetings name="bob"/>
         <p>Welcome!!!</p>
         <button>pRESS me</button>
        </>
    );
}
export default Welcome;