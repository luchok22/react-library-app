import React, { useMemo, useState } from "react";
import SearchBooks from "../components/SearchBooks/SearchBooks";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../components/BooksCard/BookCard.tsx";
import { fetchBooks } from "../redux/bookSlice";

const HomePage = () => {
  const orderBtn = ["newest", "relevance"];
  const categoryBtn = [
    "all",
    "Art",
    "Biography",
    "Computers",
    "Cooking",
    "Medical",
    "Science",
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const { books, totalBooks } = useSelector((state) => state.books);
  const [visibleBooks, setVisibleBooks] = useState(8);
  const [showMore, setShowMore] = useState(false);
  const [order, setOrder] = useState("relevance");
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    let maxResults = order === "newest" ? 10 : 20;
    dispatch(fetchBooks({ searchTerm, maxResults, order, category }));
  };
  const handleShowMore = () => {
    setVisibleBooks(visibleBooks * 3);
    setShowMore(true);
  };

  const handleInputChange = () => {
    setShowMore(false);
  };

  return (
    <SearchBooks
      category={category}
      setCategory={setCategory}
      order={order}
      setOrder={setOrder}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      totalBooks={totalBooks}
      showMore={showMore}
      books={books}
      visibleBooks={visibleBooks}
      orderBtn={orderBtn}
      handleShowMore={handleShowMore}
      categoryBtn={categoryBtn}
      handleInputChange={handleInputChange}
      handleSearch={handleSearch}
    />
  );
};

export default HomePage;
