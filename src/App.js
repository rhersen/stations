import React from "react"
import Header from "./Header"
import StationMenu from "./StationMenu"
import Table from "./Table"
import ajax from "./ajax"
import "./App.css"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { stations: [], announcements: [], now: new Date() }
  }

  componentDidMount() {
    ajax.getStations(stations => this.setState({ stations }))
  }

  render() {
    const { stations, announcements, now } = this.state
    return (
      <div className="App">
        {announcements.length > 0 ? (
          <Header
            clear={() => {
              ajax.clear()
              return this.setState({ announcements: [] })
            }}
            location={announcements[0].LocationSignature}
          />
        ) : (
          <StationMenu
            stations={stations}
            fetchDepartures={signature =>
              ajax.getAnnouncements(announcements => {
                ajax.interval(() => this.setState({ now: new Date() }))
                return this.setState({ announcements })
              }, signature)
            }
          />
        )}
        <Table announcements={announcements} now={now} />
      </div>
    )
  }
}
