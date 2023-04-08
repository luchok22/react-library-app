import React, { useMemo, useState } from "react";
import BookCard from "../BooksCard/BookCard.tsx";
import scss from "./SearchBooks.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../redux/bookSlice.js";
const orderBtn = ["newest", "relevance"];
const categoryBtn = ["all", "Art", "Biography", "Computers", 'Cooking', 'Medical', "Science"];

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { books, totalBooks } = useSelector((state) => state.books)
  const [visibleBooks, setVisibleBooks] = useState(8);
  const [showMore, setShowMore] = useState(false);
  const [order, setOrder] = useState("relevance");
  const [category, setCategory] = useState("all");
const dispatch = useDispatch()
  const handleSearch = (event) => {
    event.preventDefault();
    let maxResults = order === "newest" ? 10 : 15;
    dispatch(fetchBooks({ searchTerm, maxResults, order, category }));
  };

  const renderBooks = useMemo(() => {
    const filteredBooks = category === "all"
      ? books
      : books.filter((book) => book.volumeInfo.categories?.includes(category));
    
    return filteredBooks.slice(0, visibleBooks).map((el,index) => <BookCard {...el} key={index} />);
  }, [books, visibleBooks, category]);
  const handleShowMore = () => {
    setVisibleBooks(visibleBooks * 3);
    setShowMore(true);
  };

  const handleInputChange = () => {
    setShowMore(false);
  };

  return (
    <div className={scss.search}>
      <div className={scss.back}>
        <h1>Search for Books</h1>
        <form onSubmit={handleSearch}
      >
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
        <div className={scss.total}>Found {totalBooks} results</div>
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
