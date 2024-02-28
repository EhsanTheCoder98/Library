import React, { useState ,useEffect } from "react";
import styles from "./Library.module.css";
import { AiFillHeart} from "react-icons/ai";

const Library = ({books,statusHandler}) => {
  const [click, setClick] = useState(false);
  useEffect(() => {
    const likeStatus = JSON.parse(localStorage.getItem(`liked_${books.id}`));
    if (likeStatus !== null) {
      setClick(likeStatus);
    }
  }, [books.id]);
  const clickHandler = () => {
    const newClick = !click;
    setClick(newClick);
    localStorage.setItem(`liked_${books.id}`, JSON.stringify(newClick));
    statusHandler(newClick, books);
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
