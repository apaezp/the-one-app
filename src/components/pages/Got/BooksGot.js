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
            setImgs(booksArray)
            
    }, [])


    return (
        <div className="booksGotContainer">
            <h1>Books</h1>
            <section className="booksGot">
                {
                    books.map(item => (
                        <div className="bookBoxGot" key={books.indexOf(item)}>
                            <div className="cardContainerGot">
                                {   
                                    <div className='imgBoxGot'>
                                        <img className='bookImgGot' src={imgs[books.indexOf(item)]} alt="bookIMG"></img>
                                    </div>
            
                                }
                                <div className="bookInfoGot">
                                    <h2 className="nameBookGot">{item.name}</h2>
                                    <h3 className="releaseBookGot">{item.released}</h3>
                                    <h3 className="authorBookGot">{item.authors[0]}</h3>
                                    <p className="publisherBookGot">{item.publisher}</p>
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