import {useState} from "react";
import CustomInput from "../UI/input/CustomInput";
import './ControlledInput.css';

export  default function ControlledInput() {
    const [value,setValue]=useState('');

    return (
        <div className="ControlledInput">
            <div className="truncate">Вы ввели:  {value}</div>
            <CustomInput type="text"
                   value={value}
                   onChange={event=>setValue(event.target.value)}
            />
        </div>
    );
}