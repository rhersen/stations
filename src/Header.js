import React from "react"

export default function Header({ location }) {
  return (
    <div>
      <span className="close">⇐</span>
      <h1>{location}</h1>
    </div>
  )
}
