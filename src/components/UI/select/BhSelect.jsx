import React from 'react';
import classes from "./Select.module.css";


const BhSelect = ({children, ...props}) => {
    return (
        <select className={classes.Select} {...props}>
            {children}
        </select>
    );
};

export default BhSelect;