import React from "react"
import Book from "./Book"
import bookData from "../assets/bookData"
import { nanoid } from "nanoid"


export default function Main(props) {
  const [book, setBook] = React.useState(startLibrary(bookData))

  function startLibrary(bookData) {
    return bookData.map(book => ({
      name: book.name,
      author: book.author,
      page: book.page,
      id: nanoid()
    }));

  }


  function toggle(id) {
    setBook(prev => prev.map(item => {
      return item.id === id ? { ...item, read: !item.read } : item
    }))
  }

  const bookElements = book.map(item => (
    <Book
      key={item.id}
      id={item.id}
      toggle={toggle}
      page={item.page}
      name={item.name}
      author={item.author}
      read={item.read}
    />
  ));

  function clearLibrary() {
    setBook(window.alert())
  }

  console.log(bookData.id)
  return (
    <main>
      <div className="book-container">
        <div className="add-new-book"><img src="plusgreen.svg" alt="" /></div>
        {bookElements}
      </div>
      <button onClick={clearLibrary}>click to delete</button>
    </main>
  )
}

//addbook fucntion:
function addBook() {
  //pop up alert olarak cikti
  //ustunde 4 tane yer var
  //onlari yazip submit dedik
  //bu itemler listeye eklendi
}