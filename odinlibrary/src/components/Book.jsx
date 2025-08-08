import React from "react"
export default function Book(props) {
  return (
    <>
      <main
        onClick={() => props.toggle(props.id)}
        className={props.read ? "book-item-read" : "book-item"}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            props.deleteBook(props.id);
          }}
          className="delete-btn"
        >
          Delete
        </button>
        <p>{props.name}</p>
        <p>{props.author}</p>
        <p>{props.page}</p>
      </main>

    </>
  )

}