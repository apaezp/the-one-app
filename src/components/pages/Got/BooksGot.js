import React from 'react'
import { useState, useEffect } from "react";
import book1 from './img/book-1.jpg'
import book2 from './img/book-2.jpg'
import book3 from './img/book-3.jpg'
import book4 from './img/book-4.jpg'
import book5 from './img/book-5.jpg'
import './BooksGot.css'

const booksArray = [book1,book2,book3,book4,book5]


const BooksGot = () => {

    //Estados
    const [books, setBooks] = useState([])
    const [imgs, setImgs] = useState([])

    useEffect(() => {

        fetch("https://anapioficeandfire.com/api/books")
            .then(response => response.json())
            .then(data => setBooks([0,1,2,4,7].map(element => data[element])))
            console.log(booksArray)
            setImgs(booksArray)
            
    }, [])


    return (
        <div className="BooksGot-container">
            <section className="BooksGot-quote">
                {
                    books.map(item => (
                        <div className="Booksbox" key={books.indexOf(item)}>
                            <div className="cardContainer">
                                {   
                                    <div className='imgBox'>
                                        <img className='img' src={imgs[books.indexOf(item)]} alt="books-cover-got"></img>
                                    </div>
            
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
            
        </div>
    );
}

export default BooksGot