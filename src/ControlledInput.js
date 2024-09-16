import {useState} from "react";

export  default function ControlledInput() {
    const [value,setValue]=useState('');

    return (
        <div>
            <p>Вы ввели: {value}</p>
            <input type="text"
                   value={value}
            onChange={event=>setValue(event.target.value)}
            ></input>
        </div>
    );
}