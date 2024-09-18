import React from 'react';
import CustomButton from "../button/CustomButton";
import classes from './Popup.module.css'

const Popup = ({children, visible, setVisible}) => {
    const rootClasses=[classes.Popup];
    if(visible){
        rootClasses.push(classes.active);
    }
    return (
       <div className={rootClasses.join(' ')} onClick={()=>{setVisible(false)}}>
           <div
               onClick={(e)=>{e.stopPropagation()}}
               className={classes.PopupContent}>
               {children}
           </div>
       </div>
    );
};

export default Popup;