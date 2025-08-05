import React from "react"
import Book from "./Book"
import bookData from "../assets/bookData"


//    <button
//      onClick={() => props.toggle(props.id)}
//      style={{
//        backgroundColor: props.color
//      }}
//      className={props.on ? "on" : undefined}
//    >
//    </button>
//  )
//
//}


export default function Main(props) {
  const [book, setBook] = React.useState(bookData)


  function toggle(id) {
    setBook(prev => prev.map(item => {
      return item.id === id ? { ...item, read: !item.read } : item
    }))

  }

  const bookElements = book.map(item => (
    <Book
      toggle={toggle}
      id={item.id}
      key={item.name}
      page={item.page}
      name={item.name}
      author={item.author}
      read={item.read} />
  ))

  return (
    <main>
      <div className="book-container">
        {bookElements}
      </div>
    </main>
  )
}