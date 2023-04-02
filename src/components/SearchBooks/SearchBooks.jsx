import React, { useMemo } from "react";
import { useState } from "react";
import axios from "axios";
import BookCard from "../BooksCard/BookCard";
import scss from "./SearchBooks.module.scss";
const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0)
  const [visibleBooks, setVisibleBooks] = useState(10)
  const [showMore, setShowMore] = useState(false);
  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&orderBy=newest&maxResults=40&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU`
    );
    setBooks(response.data.items);
    setTotalBooks(response.data.totalItems)
    setVisibleBooks(10)
  };
  const renderBooks = useMemo(() => {
    return books.slice(0, visibleBooks).map((el) => <BookCard {...el} />);
  }, [books, visibleBooks]);

  const handleShowMore = () => {
    setVisibleBooks(visibleBooks * 3)
    setShowMore(true);
  };
  const handleInputChange = () => {
    setShowMore(false);
  };
  console.log(books);
  return (
    <div className={scss.search}>
        <div className={scss.back}>
          <h1>Search for Books</h1>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => { setSearchTerm(event.target.value); handleInputChange();}}
            />
          </form>
        </div>
      <div className={scss.container}>
        <div className={scss.total}>
        Found {totalBooks} result
        </div>
        <div className={scss.wrapper}>{renderBooks}</div>
        <div className={scss.more}>
          {!showMore && books.length > 4 && (
            <button onClick={handleShowMore}>More Books</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
