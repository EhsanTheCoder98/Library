import React, { useState } from "react";
import { books } from "../constants/mockData";
import Library from "./Library";
import styles from "./Book.module.css";

const Book = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  const [liked, setLiked] = useState([]);
  const statusHandler = (status, book) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked([...liked, book]);
    }
  };
  const searchedBook = search.includes(books)
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={searchHandler}
        placeholder="Search the book you want"
      />
      <div className={styles.container}>
        <div className={styles.booksContainer}>
          {books.map((item) => (
            <Library key={item.id} books={item} statusHandler={statusHandler} />
          ))}
        </div>
        {liked.length && (
          <div className={styles.favorites}>
            <h2>Favorites</h2>
            {liked.map((item) => (
              <div key={item.id}>
                <img src={item.image} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Book;
