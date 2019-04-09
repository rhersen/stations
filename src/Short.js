import React from "react"

export default function Short({ announcement }) {
  return <td className="short">{announcement.Deviation && announcement.Deviation.join()}</td>
}
