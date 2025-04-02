import { useEffect } from "react";
import { useState } from "react";
function Hooks(){
        const [seconds,setSeconds]=useState(0);
        useEffect(()=>{
            console.log("Effect is runing");
            const intervalId=setInterval(()=>{
                setSeconds(seconds+1);
                console.log("tickk!!!!!");
            },1000);
 return()=>{
    console.log("cleanup the interval");
    clearInterval(intervalId);

 };

        } ,[]);
        return <div>Timer: {seconds} seconds</div>;
}

export default Hooks;