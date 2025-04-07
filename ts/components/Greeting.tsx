import React from 'react';
type GreetingProps={
    name:string;
};
function Greeting({name}:GreetingProps){
    return(
        <h1>Helloo {name} welcome to typescript with react</h1>
    );
}
export default Greeting;