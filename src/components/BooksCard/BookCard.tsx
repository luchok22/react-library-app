import React, { FC } from "react";
import scss from "./BookCard.module.scss";
interface BookCardProps{
  volumeInfo: volumeInfoProps;
}
interface volumeInfoProps{
  title: string;
  categories: string;
  authors: string;
  imageLinks: imageLinksProps;
}
interface imageLinksProps{
  thumbnail: string;
}
const BookCard: FC<|BookCardProps> = ({ volumeInfo }) => {
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
        <div className={scss.category}>
          <span>Категория:</span>
          <p>{volumeInfo.categories}</p>
        </div>
        <div className={scss.more}>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
