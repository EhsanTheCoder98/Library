import React, { useState } from "react";
import { books as allBooks } from "../constants/mockData";
import Library from "./Library";
import styles from "./Book.module.css";
import { FaBook } from "react-icons/fa"

const Book = () => {
  const [books,setBooks] = useState(allBooks);
  const bookSearchHandler = () => {
    if(search){
      const newBooks = allBooks.filter(book=>book.title.toLowerCase().includes(search));
      setBooks(newBooks);
    }else{
      setBooks(allBooks);
    }
  }
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
  return (
    <>
      <div className={styles.search}>
      <input
        type="text"
        value={search}
        onChange={searchHandler}
        placeholder="Search the book you want"
      />
      <button onClick={bookSearchHandler} >
        <FaBook />
      </button>
      </div>
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
