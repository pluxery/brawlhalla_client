import React from 'react';
import { Alert, AlertTitle, Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";

const EmptyDataAlert = ({ text }) => {
    return (
        <div className="container text-center">
        <Alert icon={false} severity="success" className="row justify-content-center">
                {text}
                <img src='\stickers\caspian-idk.png'
                    style={{ width: 100, height: 100 }} />
        </Alert>
        </div>
    );
};
export default EmptyDataAlert;