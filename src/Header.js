import React from "react"
import ajax from "./ajax"

export default function Header({ location }) {
  return (
    <div>
      <span className="close">⇐</span>
      <h1>{ajax.name(location)}</h1>
    </div>
  )
}
