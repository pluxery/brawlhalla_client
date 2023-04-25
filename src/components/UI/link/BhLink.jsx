import React from 'react';
import classes from "./Link.module.css";
import {Link} from "react-router-dom";

const BhLink = ({route, children, ...props}) => {
    return (
        <Link to={route} className={classes.Link} {...props}>{children}</Link>
    );
};

export default BhLink;