import React,{ useState} from "react";

function Stateexample(){
    const [count, setCount]=useState(0);

    return(
        <div>
            <p>Tis is from useState</p>
            <p>You clicked the button {count} times </p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
