import React from "react"
import ajax from "./ajax"

export default function Destination({ announcement }) {
  return (
    <td className="destination">
      {announcement.ToLocation.map(location => ajax.name(location.LocationName)).join()}
    </td>
  )
}
