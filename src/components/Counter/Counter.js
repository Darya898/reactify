import {useState} from "react";
import './Conter.css';
import CustomButton from "../UI/button/CustomButton";

export default function Counter() {
    const [value,setValue]=useState(0);

    function increment(){
        setValue(value+1);
    }
    function decrement(){
        setValue(value-1);
    }

    return (
        <div className="Counter">
            <h2>Счетчик {value}</h2>
            <CustomButton onClick={increment}>+</CustomButton>
            <CustomButton style={{marginLeft:'4px'}} onClick={decrement}>-</CustomButton>
        </div>
    );
}