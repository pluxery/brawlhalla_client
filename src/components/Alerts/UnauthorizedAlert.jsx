import React from 'react';
import {Alert, AlertTitle} from "@mui/material";
import {NavLink} from "react-router-dom";

const UnauthorizedAlert = () => {
    return (
        <Alert severity="warning">
            <AlertTitle/>
            Вы вошли как гость. Чтобы получить больше возможностей - <NavLink to={"/"}>авторизируйтесь</NavLink>.
        </Alert>
    );
};

export default UnauthorizedAlert;