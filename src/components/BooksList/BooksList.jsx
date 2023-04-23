import React, { useMemo } from 'react';
import BookCard from '../BooksCard/BookCard.tsx';

const BooksList = ({books, category, visibleBooks}) => {
    
  const renderBooks = useMemo(() => {
    const filteredBooks =
      category === "all"
        ? books
        : books.filter((book) =>
            book.volumeInfo.categories?.includes(category)
          );

    return filteredBooks
      .slice(0, visibleBooks)
      .map((el, index) => <BookCard {...el} key={index} />);
  }, [books, visibleBooks, category]);
    return (
        <>
          {renderBooks}  
        </>
    );
};

export default BooksList;