import {useState} from "react";

export default function Counter() {
    const [value,setValue]=useState(0);

    function increment(){
        setValue(value+1);
    }
    function decrement(){
        setValue(value-1);
    }

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    );
}