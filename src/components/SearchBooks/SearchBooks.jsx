import React from "react";
import scss from "./SearchBooks.module.scss";
import { Link } from "react-router-dom";
import BooksList from "../BooksList/BooksList";

const SearchBooks = ({
  orderBtn,
  categoryBtn,
  handleSearch,
  handleInputChange,
  handleShowMore,
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  order,
  visibleBooks,
  setOrder,
  totalBooks,
  showMore,
  books,
}) => {
  return (
    <div className={scss.search}>
      <div className={searchTerm ? scss.activeBack : scss.back}>
        <h1>Search for Books</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              handleInputChange();
            }}
          />
          <div className={scss.sort}>
            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                handleInputChange();
              }}
            >
              {categoryBtn.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
            <select
              value={order}
              onChange={(event) => {
                setOrder(event.target.value);
                handleInputChange();
              }}
            >
              {orderBtn.map((order) => (
                <option value={order}>{order}</option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className={scss.container}>
        <div className={scss.total}>
          <p>Found {totalBooks} results</p>
        </div>
        <div className={scss.wrapper}>
          <BooksList
            category={category}
            visibleBooks={visibleBooks}
            books={books}
          />
        </div>
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
