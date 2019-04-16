import React from "react"
import "./table.css"
import Short from "./Short"
import Destination from "./Destination"
import Time from "./Time"
import Countdown from "./Countdown"

export default function Table({ announcements, now }) {
  return (
    <table>
      <tbody>
        {announcements.map(announcement => {
          const id = announcement.AdvertisedTrainIdent
          return (
            <tr key={id} className={direction(id)}>
              <Short announcement={announcement} />
              <Destination announcement={announcement} />
              <Time announcement={announcement} />
              <Countdown announcement={announcement} now={now} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function direction(id) {
  return /\d+[24680]$/.test(id) ? "northbound" : "southbound"
}
