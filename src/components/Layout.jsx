import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <h1>Book Library</h1>
                {children}
            <div>
                <span>Developed by Ehsan</span>
            </div>
        </div>
    );
};

export default Layout;