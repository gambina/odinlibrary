import React from "react"
export default function Button(props) {
  return (

    <button
      onClick={() => props.toggle(props.id)}
      style={{
        backgroundColor: props.color
      }}
      className={props.on ? "on" : undefined}
    >
    </button>
  )

}