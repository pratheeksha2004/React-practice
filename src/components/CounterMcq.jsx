import { useState } from "react";
function CounterMcq() {
    const [count, setCount] = useState(0);
    function handleClick() {
   setCount(count + 1);
    setCount(count+2);
    console.log(count);
    }
    return<button onClick={handleClick}>Click me{count}</button>;
    }
    export default CounterMcq;