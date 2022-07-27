import React, { useState, useEffect } from "react";
import book1 from "./img/lotrBook1.png";
import book2 from "./img/lotrBook2.jpg";
import book3 from "./img/lotrBook3.jpg";
import "./BooksLotr.css";

const booksArray = [book1, book2, book3];

const BooksLotr = () => {
  //Estados
  const [book, setBook] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawBooks = await fetch("https://the-one-api.dev/v2/book/");
      const books = await rawBooks.json();
      const book = books.docs;

      setBook(book);
      setImg(booksArray);
      // console.log(book);
      // console.log(booksArray);
    };
    fetchData();
  }, []);

  return (
    <div className="booksLotr-container">
      <section className="booksLotr">
        {book.map((item) => (
          <div className="bookBox" key={book.indexOf(item)}>
            <div className="cardContainer">
              {
                <div className="imgBox" key={book.indexOf(item)}>
                  <img className="bookImg" src={img[book.indexOf(item)]} alt="book-cover"></img>
                </div>
              }
              <div className="cardInfo">
                <p className="name">{item.name}</p>
                <div className="chapters"></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BooksLotr;