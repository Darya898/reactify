import React, {Component} from 'react';
import classes from './CustomInput.module.css';

const CustomInput = ({ children,...props}) => {
        return (
        <input className={classes.customInput} {...props}/>
        );
}

export default CustomInput;