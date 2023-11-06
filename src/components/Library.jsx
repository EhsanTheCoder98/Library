import React from 'react';
import styles from "./Library.module.css";

import { books } from '../constants/mockData';

const Library = () => {
    return (
        <div>
            {books.map(item=>
                <div key={item.id} className={styles.container}>
                    <div>
                        <img src={item.image}/>
                    </div>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.author}</p>
                        <div>
                            <span>{item.country}</span>
                            <span>{item.pages}</span>
                        </div>
                    </div>
                </div>
                )}
        </div>
    );
};

export default Library;