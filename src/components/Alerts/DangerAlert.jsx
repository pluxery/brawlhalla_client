import React from 'react';
import {Alert, AlertTitle} from "@mui/material";
import {NavLink} from "react-router-dom";

const DangerAlert = ({message}) => {
    return (
        <Alert severity="error">
            <AlertTitle/>
            ошибка: {message}
        </Alert>
    );
};

export default DangerAlert;