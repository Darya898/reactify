import React from 'react';
import classes from './CustomButton.module.css';

const CustomButton = ({ children,...props}) => {
    return (
        <button {...props} className={classes.customBnt}>
            {children}
        </button>
    );
};

export default CustomButton;