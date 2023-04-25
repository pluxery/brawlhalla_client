import React from 'react';
import classes from "./Button.module.css";

const BhButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.Button}>
            {children}
        </button>
    );
};

export default BhButton;