import { useState } from "react"

export default function Counter(){
    const[count,setCount]=useState(0)
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    return( 
        <center>
             <div>
            <h1>count is: {count}</h1>
            <button onClick={(decrement)}>-</button> 
           
            <button onClick={(increment)}> +</button> 
        </div>
        </center>
      
);
}