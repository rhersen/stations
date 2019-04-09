import React from "react"
import "./table.css"
import TrainId from "./TrainId"
import Short from "./Short"
import Destination from "./Destination"
import Time from "./Time"

export default function Table({ announcements }) {
  return (
    <table>
      <tbody>
        {announcements.map(announcement => {
          console.log(announcement)
          const id = announcement.AdvertisedTrainIdent
          return (
            <tr key={id} className={direction(id)}>
              <TrainId announcement={announcement} />
              <Short announcement={announcement} />
              <Destination announcement={announcement} />
              <Time announcement={announcement} />
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
