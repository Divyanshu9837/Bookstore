import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import '../css/Book.css'

const Books = ({role}) => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
      .then(res => {
        console.log(res.data)          // check structure
        setBooks(res.data.books)      // FIXED
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='book-list'>
      {
        books.map(book => (
         <BookCard key={book.id} book={book} role={role}> </BookCard>  // PASS ROLE AS PROP
           
        ))
      }
    </div>
  )
}

export default Books