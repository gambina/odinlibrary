import React from "react"
import Book from "./Book"
import bookData from "../assets/bookData"
import { nanoid } from "nanoid"


/// start 
// 1. all book object will be stored in array 
// 2. add a function to take those arguments and add into that array
// 3. Show those books to the page as a card
// 4. new book button brings up the form allows user to input details - event.preventDefault() ve dialog
// 5. add a button on each book to display to remove it from library - domelement
// 6. toggle read
// 7. Kitap silme tusu



export default function Main(props) {
  // This is how we fetch and change book data
  const [book, setBook] = React.useState(startLibrary(bookData))
  // This is how the data for new books are collected
  const [formData, setFormData] = React.useState({
    name: "",
    author: "",
    read: false,
    page: 0
  })

  function startLibrary(bookData) {
    return bookData.map(book => ({
      name: book.name,
      author: book.author,
      page: book.page,
      read: book.read,
      id: nanoid()
    }));

  }
  // Read - unread toggle
  function toggle(id) {
    setBook(prev => prev.map(item => {
      return item.id === id ? { ...item, read: !item.read } : item
    }))

  }
  // Filter based on 'selected'
  const filteredBooks = book.filter(item => {
    if (props.selected === 1) return item.read;      // read
    if (props.selected === 2) return !item.read;     // unread
    return true;                               // all
  });

  // Delete book by filtering it out by the id
  function deleteBook(id) {
    setBook(prevBooks => prevBooks.filter(book => book.id !== id));
  }
  // Create component for books with properties passed to Book.jsx
  const bookElements = filteredBooks.map(item => (
    <Book
      key={item.id}
      id={item.id}
      toggle={toggle}
      page={item.page}
      name={item.name}
      author={item.author}
      read={item.read}
      deleteBook={deleteBook}
    />
  ));

  // To get the dialog button(for collecting new book data) we start a reference
  const dialogRef = React.useRef(null);
  // When filling the form, data needs to propogate
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
            ? Number(value)
            : value,
    }));
  }
  // When form is submitted this fn triggers and data is stored in the places given
  function addNewBook() {
    const newBook = {
      name: formData.name.trim(),
      author: formData.author.trim(),
      read: formData.read,
      page: formData.page,
      id: nanoid(),
    };
    // Make sure to add the book to the list
    setBook(prevBooks => [...prevBooks, newBook]);
    // Form is set to its initial values
    setFormData({ name: "", author: "", read: false });
    // Reference is closed
    dialogRef.current.close();
  }

  return (<>
    <main> {/*In this there are 3 same level items, add new book button,
    dialog to open the form and listing the Book elements. They are wraped under book-container*/}
      <div className="book-container">
        <button onClick={() => dialogRef.current.showModal()} className="add-new-book">
          <img src="plusgreen.svg" alt="" />
        </button>
        <dialog ref={dialogRef}>
          <form className="dialog-popup" method="dialog" onSubmit={addNewBook}>
            <h2>Add a New Book</h2>
            <input
              type="text"
              name="name"
              placeholder="Book Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
            />
            <input
              type="number"
              name="page"
              placeholder="page number"
              value={formData.page}
              onChange={handleChange}
            />
            <label>
              <input
                type="checkbox"
                name="read"
                checked={formData.read}
                onChange={handleChange}
              />
              Read
            </label>
            <div style={{ marginTop: "1rem" }}>
              <button type="submit">Save</button>
              <button
                type="button"
                onClick={() => dialogRef.current.close()}
                style={{ marginLeft: "0.5rem" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </dialog>
        {bookElements}
      </div>
    </main>
  </>)
}

