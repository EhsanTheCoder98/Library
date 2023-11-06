import React from 'react';
import styles from "./Layout.module.css";

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <h1>Book Library</h1>
                {children}
            <h4>Developed by Ehsan</h4>
        </div>
    );
};

export default Layout;