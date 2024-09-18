import {useState} from "react";
import CustomInput from "../UI/input/CustomInput";
import './ControlledInput.css';

export  default function ControlledInput() {
    const [value,setValue]=useState('');

    return (
        <div className="ControlledInput">
            <p>Вы ввели: {value}</p>
            <CustomInput type="text"
                   value={value}
            onChange={event=>setValue(event.target.value)}
            ></CustomInput>
        </div>
    );
}