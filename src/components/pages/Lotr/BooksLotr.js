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
  const [chapter, setChapter] = useState([]);

  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer nr9mUBiPDHSvg418q-zm'
    }
    const fetchData = async () => {
      const rawBooks = await fetch("https://the-one-api.dev/v2/book/");
      const books = await rawBooks.json();
      const book = books.docs;
      
      const rawChapters = await fetch("https://the-one-api.dev/v2/chapter/", {headers: headers})
      const chapters = await rawChapters.json();
      const chapter = chapters.docs

      setBook(book);
      setImg(booksArray);
      setChapter(chapter);
      
      }
      
    fetchData();
  }, []);

  return (
    <div className="bookContainerLotr">
      <h1>Books</h1>
      <section className="booksLotr">
        {book.map(item => (
          <div className="cardBooksLotr" key={book.indexOf(item)}>
            <div className="cardContainerLotr">
              {
                <div className="imgBookContainer" key={img.indexOf(item)}>
                  <img className="imgBook" src={img[book.indexOf(item)]} alt="ImageOfTheBook"></img>
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
