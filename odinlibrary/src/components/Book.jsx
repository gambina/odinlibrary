import React from "react"
export default function Book(props) {
  return (

    <button
      onClick={() => props.toggle(props.id)}
      className={props.read ? "read" : undefined}
    > {props.name} {props.author} {props.page}
    </button>
  )

}