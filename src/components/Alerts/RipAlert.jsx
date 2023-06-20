import React from 'react';
import { Alert, AlertTitle, Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";

const RipAlert = ({ text }) => {
    return (
        <div className="container text-center">
        <Alert icon={false} severity="success" className="row justify-content-center" style={
                {minHeight:800}
                }>
                <h3>{text}</h3>
                <img src='\stickers\athoth-rip.png' alt='...'
                    style={{ width: 100, height: 100 }} />
        </Alert>
        </div>
    );
};
export default RipAlert;