import React from 'react';
import Header from "./Header/Header";

const Layout = ({children, active}) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    );
};

export default Layout;