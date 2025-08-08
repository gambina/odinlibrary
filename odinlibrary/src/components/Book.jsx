import React from "react"
export default function Book(props) {
  return (

    <button
      onClick={() => props.toggle(props.id)}
      className={props.read ? "read" : undefined}
    > <p>{props.name}</p>
      <p>{props.author}</p>
      <p>{props.page}</p>
    </button>
  )

}