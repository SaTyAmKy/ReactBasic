import {useState} from "react";

function Counter({value,setValue}){
    const [count,setCount] = useState(0);
    

    return (
        <>
        <h1>Counter with steps</h1>
        <input type="number" placeholder="Enter here ..." value={value} onChange={(e)=>setValue(e.target.value)}/>
        <p>Count :{count} </p>
        <button onClick={() =>setCount(count + 1)}>Increment</button>
        <button onClick={() =>setCount(count - 1)}>Decrement</button>
        <button onClick={()=> setValue(0)}>Reset</button>
        
        </>
    )
}
export default Counter;