const names = {}

function name(locationSignature) {
  return names[locationSignature] || locationSignature
}

function onerror(e) {
  console.error(e)
}

function getStations(callback) {
  const request = new XMLHttpRequest()
  request.open("GET", "http://localhost:3000/json/pendel", true)

  request.onload = function() {
    const results = JSON.parse(this.responseText)
    results.forEach(
      element =>
        (names[element.LocationSignature] = element.AdvertisedShortLocationName)
    )
    callback(results)
  }

  request.onerror = onerror
  request.send()
}

function getAnnouncements(callback, signature) {
  const request = new XMLHttpRequest()

  request.open(
    "GET",
    "http://localhost:3000/json/departures?since=0:15&until=0:59&locations=" +
      signature,
    true
  )

  request.onload = function() {
    if (this.status !== 200) {
      callback([])
      return
    }

    const results = JSON.parse(this.responseText).RESPONSE.RESULT[0]
      .TrainAnnouncement

    if (!results) {
      callback({})
      return
    }

    callback(results)
  }

  request.onerror = onerror
  request.send()
}

let intervalId

function interval(callback) {
  intervalId = setInterval(callback, 990)
}

function clear() {
  return clearInterval(intervalId)
}

module.exports = {
  getStations,
  getAnnouncements,
  interval,
  clear,
  name
}
