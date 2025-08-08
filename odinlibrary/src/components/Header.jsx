import React from "react"
import { clsx } from "clsx"

export default function Header(props) {
  const buttons = ['all', 'read', 'unread'];

  return (
    <>
      <h1>Kulta Girl's Library</h1>
      <div className="button-group">
        <p>View: </p>
        {buttons.map((label, index) => (
          <button
            key={index}
            onClick={() => props.setSelected(index)}
            className={`view-button ${props.selected === index ? 'selected' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}