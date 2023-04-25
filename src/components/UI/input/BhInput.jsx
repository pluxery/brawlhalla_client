import React from 'react';
import classes from "./Input.module.css";

const BhInput = React.forwardRef((props, ref) => {
    return (
       <input ref={ref} className={classes.Input} {...props}/>
    );
});

export default BhInput;