import React from "react"
import ajax from "./ajax"

export default function Header({ location, clear }) {
  return (
    <div>
      <span className="close" onClick={clear}>
        ⇐
      </span>
      <h1>{ajax.name(location)}</h1>
    </div>
  )
}
