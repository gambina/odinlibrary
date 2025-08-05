import React from "react"
import { clsx } from "clsx"

export default function Header() {
  const [selected, setSelected] = React.useState(0)
  const buttons = ['all', 'read', 'unread']

  const viewStatus = clsx("view-button",
    {
      selected: "selected"
    }
  )


  return (
    <>
      <h1>Kulta girl's Library</h1>
      <div className="button-group">
        <p>View: </p>
        {buttons.map((label, index) => (
          <button key={index}
            onClick={() => setSelected(index)}
            className={`view-button ${selected === index ? 'selected' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  )
}