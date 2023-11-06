import React, { useState } from "react";
import styles from "./Library.module.css";
import { AiFillHeart} from "react-icons/ai";

const Library = ({books,statusHandler}) => {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick((click) => !click);
    statusHandler(click,books);
  };
  return (
    <div>
        <div className={styles.container}>
          <div>
            <img src={books.image} />
          </div>
          <div className={styles.middle}>
            <h3>{books.title}</h3>
            <p>{books.author}</p>
            <div>
              <span>{books.country}</span>
              <span>{books.pages} Pages</span>
            </div>
          </div>
          <button onClick={clickHandler}>
            <AiFillHeart color={click?"red":"white"} fontSize="1.5rem"/>
          </button>
        </div>
    </div>
  );
};

export default Library;
