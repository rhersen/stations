import React from "react"
import StationBranch from "./StationBranch"
import * as areas from "./areas"
import "./StationMenu.css"

export default function StationMenu({ stations, fetchDepartures }) {
  return (
    <div id="navs">
      {branch(areas.nw, "pull-left")}
      {branch(areas.ne, "pull-right")}
      {branch(areas.ncw, "pull-left narrow")}
      {branch(areas.nc, "center")}
      {branch(areas.nce, "pull-right narrow")}
      {branch(areas.c, "center wide")}
      {branch(areas.scw, "pull-left narrow")}
      {branch(areas.sc, "center narrow")}
      {branch(areas.sce, "pull-right narrow")}
      {branch(areas.sw, "pull-left")}
      {branch(areas.se, "pull-right")}
    </div>
  )

  function branch(inside, className) {
    return (
      <StationBranch
        stations={stations}
        inside={inside}
        className={className}
        fetchDepartures={fetchDepartures}
      />
    )
  }
}
