import React from 'react'
import React, { useState, useEffect } from "react";
// import book1 from '../assets/imgs/book-1.jpg'
// import book2 from '../assets/imgs/book-2.jpg'
// import book3 from '../assets/imgs/book-3.jpg'
// import book4 from '../assets/imgs/book-4.jpg'
// import book5 from '../assets/imgs/book-5.jpg'

const booksArray = [book1,book2,book3,book4,book5]


const BooksGot = () => {

    //Estados
    const [books, setBooks] = useState([])

    useEffect(() => {

        fetch("https://anapioficeandfire.com/api/books")
            .then(response => response.json())
            .then(data => setBooks([0,1,2,4,7].map(element => data[element])))
            
    }, [])


    return (
        <div className="footerGot-container">
            <section className="footerGot-quote">
                {
                    books.map(item => (
                        <div className="box" key={books.indexOf(item)}>
                            <div className="cardContainer">
                                {
                                    booksArray.map(book => (
                                        
                                        <div className="imgContainer" key={booksArray.indexOf(book)}>
                                    <img src={book} className="cardImg"></img>
                                </div>
                                    ))
                                }
                                <div className="cardInfo">
                                    <p className="name">{item.name}</p>
                                    <p className="author">{item.authors[0]}</p>
                                    <p className="publisher">{item.publisher}</p>
                                    <p className="releaseDate">{item.released}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
            <div className="footerGot-rights">
                <p>© 2022 TheOne. All rights reserved.</p>
            </div>
        </div>
    );
}

export default BooksGot