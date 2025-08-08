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



export default function Main({ selected }) {
  const [book, setBook] = React.useState(startLibrary(bookData))
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

  function toggle(id) {
    setBook(prev => prev.map(item => {
      return item.id === id ? { ...item, read: !item.read } : item
    }))

  }
  // Filter based on `selected`
  const filteredBooks = book.filter(item => {
    if (selected === 1) return item.read;      // read
    if (selected === 2) return !item.read;     // unread
    return true;                               // all
  });



  const bookElements = filteredBooks.map(item => (
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


  const dialogRef = React.useRef(null);

  //  function addNewBook(formData) {
  //    const newBook = formData.get("book")
  //    setBookObject(prev => [...prev, newBook])
  //  }
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
  function addNewBook() {
    const newBook = {
      name: formData.name.trim(),
      author: formData.author.trim(),
      read: formData.read,
      page: formData.page,
      id: nanoid(),
    };

    setBook(prevBooks => [...prevBooks, newBook]);

    // Clear the form after adding
    setFormData({ name: "", author: "", read: false });

    dialogRef.current.close();
  }


  console.log(book)

  return (<>
    <main>
      <div className="book-container">
        <button onClick={() => dialogRef.current.showModal()} className="add-new-book">
          <img src="plusgreen.svg" alt="" />
        </button>
        <dialog ref={dialogRef}>
          <form method="dialog" onSubmit={addNewBook}>
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

