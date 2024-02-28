import React, { useState ,useEffect } from "react";
import { books as allBooks } from "../constants/mockData";
import Library from "./Library";
import styles from "./Book.module.css";
import { FaBook } from "react-icons/fa";

const Book = () => {
  const [books, setBooks] = useState(allBooks);
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState([]);
  
  useEffect(()=>{
    const likedBefore = JSON.parse(localStorage.getItem("likedBooks"));
    if(likedBefore){
      setLiked(likedBefore);
    }
  },[])
  

  const bookSearchHandler = () => {
    if (search) {
      const newBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setBooks(newBooks);
    } else {
      setBooks(allBooks);
    }
  };

  const searchHandler = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const statusHandler = (status, book) => {
    if (status) {
      setLiked([...liked, book]);
      localStorage.setItem("likedBooks",JSON.stringify([...liked,book]));
     
    } else {
      const newLikedList = liked.filter(item => item.id !== book.id);
      setLiked(newLikedList);
      localStorage.setItem("likedBooks",JSON.stringify(newLikedList));
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
        <button onClick={bookSearchHandler}>
          <FaBook />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.booksContainer}>
          {books.map((item) => (
            <Library key={item.id} books={item} statusHandler={statusHandler} />
          ))}
        </div>
        {liked && liked.length > 0 && (
          <div className={styles.favorites}>
            <h2>Favorites</h2>
            {liked.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.title} />
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
