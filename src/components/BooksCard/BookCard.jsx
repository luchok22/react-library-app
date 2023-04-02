import React from "react";
import scss from "./BookCard.module.scss";
const BookCard = ({ volumeInfo }) => {
  return (
    <div className={scss.card}>
      <div className={scss.img}>
        <img
          src={volumeInfo.imageLinks.thumbnail}
          alt={volumeInfo.title}
        />
      </div>
      <div className={scss.about}>
        <span>{volumeInfo.authors}</span>
        <div>{volumeInfo.title}</div>
        <div className={scss.more}>
          <button>Read more</button>
        </div>
        <div className={scss.category}>
          <span>Категория:</span>
          <p>{volumeInfo.categories}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
