import React,{useState, useEffect} from 'react'
import book1 from './img/hp-book-1.jpg'
import book2 from './img/hp-book-2.jpg'
import book3 from './img/hp-book-3.jpg'
import book4 from './img/hp-book-4.jpg'
import book5 from './img/hp-book-5.jpg'
import book6 from './img/hp-book-6.jpg'
import book7 from './img/hp-book-7.jpg'
import book8 from './img/hp-book-8.jpg'
import './BooksHp.css'


const booksArray = [book1,book2,book3,book4,book5,book6,book7,book8]

const BooksHp = () => {
  //Estados
  const [book, setBook] = useState([])
  const [img, setImg] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const rawBooks = await fetch('https://harry-potter-api-production.up.railway.app/libros')
      const book = await rawBooks.json();
      // console.log(book)
      setBook(book)
      setImg(booksArray)
    }
    fetchData()

  }, []);

  return ( 
    <div className='booksHp-container'>
      <h1>Books</h1>
      <section className='booksHp'>
        {
          book.map (item => (
            <div className='bookBox' key={book.indexOf(item)}>
              <div className='cardContainer'>
                {
                  <div className='imgBox' key={img.indexOf(item)}>
                    <img className='bookImg' src={img[book.indexOf(item)]} alt="ImgBookHp"></img>
                  </div>
                }
                <div className='cardInfo'>
                  <h3 className='name'>{item.titulo_original}</h3>
                  <h3 className='release'>Lanzamiento: {item.fecha_de_lanzamiento}</h3>
                  <h3 className='author'>Autora: {item.autora}</h3>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default BooksHp