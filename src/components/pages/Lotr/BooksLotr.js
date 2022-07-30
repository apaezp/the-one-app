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
      
      
      }
      
    fetchData();
  }, []);

  return (
    <div className="booksLotrContainer">
      <h1 className="booksTitleLotr">Books</h1>
      <section className="booksLotr">
        {book.map(item => (
          <div className="bookBoxLotr" key={book.indexOf(item)}>
            <div className="cardContainerLotr">
              {
                <div className="imgBoxLotr" key={img.indexOf(item)}>
                  <img className="bookImgLotr" src={img[book.indexOf(item)]} alt="ImageOfTheBook"></img>
                </div>
              }
              <div className="bookInfoLotr">
                <h2 className="nameBookLotr">{item.name}</h2>
                
                
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BooksLotr;
