import React from "react"

export default function Time({ announcement }) {
  return <td className="time">{announcement.AdvertisedTimeAtLocation.substring(11)}</td>
}
