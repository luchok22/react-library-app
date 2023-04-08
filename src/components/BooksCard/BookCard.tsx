import React, { FC } from "react";
import scss from "./BookCard.module.scss";
interface BookCardProps {
  volumeInfo: volumeInfoProps;
}
interface volumeInfoProps {
  title: string;
  categories: string;
  authors: string;
  imageLinks: imageLinksProps;
}
interface imageLinksProps {
  thumbnail: string;
  smallThumbnail: string;
}
const BookCard: FC<BookCardProps> = ({ volumeInfo }) => {
  let thumbnail = volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail;
    return (
      <div className={scss.card}>
        <div className={scss.img}>
          <img src={thumbnail} alt={volumeInfo.title} />
        </div>
        <div className={scss.about}>
          <span>{volumeInfo.authors}</span>
          <div>{volumeInfo.title}</div>
          <div className={scss.category}>
            <span>Категория:</span>
            <p>{volumeInfo.categories}</p>
          </div>
        </div>
      </div>
    );
};

export default BookCard;
