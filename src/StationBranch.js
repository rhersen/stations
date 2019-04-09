import React from "react"

export default function StationBranch({
  stations,
  inside,
  className,
  fetchDepartures
}) {
  if (!stations) return null
  return (
    <nav className={className}>
      {stations.map(station =>
        inside(station) ? (
          <div
            key={station.LocationSignature}
            onClick={() => fetchDepartures(station.LocationSignature)}
          >
            {station.AdvertisedShortLocationName}
          </div>
        ) : null
      )}
    </nav>
  )
}
