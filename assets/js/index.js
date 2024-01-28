$(function() {
  // User Input
  const input = $('#search-input')
  const submit = $('#search-button')

  // Date
  const today = dayjs()

  // API
  const API = 'fdeabcbe2a5f2a291f6081b9c648f575'

  // Begin process of fetching API
  submit.on('click', function(e) {
    e.preventDefault()
    
    // Build geocoding URL
    const userInput = input.val()
    const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput},GB&appid=${API}`

    // Fetch longitude and latitude
    fetch(geocodingURL)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      // Retrieve longitude and latitude from data
      const lon = data[0].lon
      const lat = data[0].lat
      const location = data[0].name

      // Build current day forecast URL
      const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`

      // Fetch current weather conditions
      fetch(currentURL)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        // Current Day Selectors
        const currentDate = $('#current-date')
        const currentTemp = $('#current-temp')
        const currentWind = $('#current-wind')
        const currentHumidity = $('#current-humidity')
        const currentIcon = $('#current-icon')
        const currentLocation = $('#current-location')

        // Retrieve temp, wind, humidity and icon code
        let temp = (data.main.temp - 273.15).toFixed(2) + '°'
        let wind = data.wind.speed + 'KPH'
        let humidity = data.main.humidity + '%'
        let icon = data.weather[0].icon
        
        // Add to DOM
        currentLocation.text(location)
        currentDate.text(today.format('DD/MM/YY'))
        currentTemp.text(temp)
        currentWind.text(wind)
        currentHumidity.text(humidity)
        currentIcon.attr('src', iconURL(icon))

        // Build 5 day forecast URL
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`

        // Fetch 5 day forecast
        fetch(forecastURL)
          .then(function(response) {
            return response.json()
          })
          .then(function(data) {
            // List of all times
            const list = data.list
            
            // Get relevant data from Forecast Object and store in forecastSnapshots array
            const forecastSnapshots = []
            for (let i = 1; i < 6; i++) {
              // TODO - Find a way of getting it to do this in one line using .? or something similar
              let snapshot;
              // Try to get noon data
              if (snapshot = data.list.find((time) => time.dt == getUnixCode(i, 12))) {
                forecastSnapshots.push(snapshot)
                continue
              }
              // If noon data isnt available, get earliest possible time
              if (snapshot = data.list.find((time) => time.dt == getUnixCode(i, 0))) {
                forecastSnapshots.push(snapshot)
                continue
              }
              throw new Error(`Could not retrieve raw date element for ${i}th element of snapshot list`);
            }

            // Record 5 day forecast to DOM
            for (let i = 1; i < 6; i++) {
              // Dynamically get DOM elements
              let dateEl = $('#day'+i+'-date')
              let tempEl = $('#day'+i+'-temp')
              let windEl = $('#day'+i+'-wind')
              let humidityEl = $('#day'+i+'-humidity')
              let iconEl = $('#day'+i+'-icon')

              // Retrieve data from forecastSnapshots
              temp = (forecastSnapshots[i - 1].main.temp - 273.15).toFixed(2) +'°'
              wind = forecastSnapshots[i - 1].wind.speed +'KPH'
              humidity = forecastSnapshots[i - 1].main.humidity + '%'
              icon = forecastSnapshots[i - 1].weather[0].icon

              // Record to DOM
              dateEl.text(today.add(i, 'd').format('DD/MM/YY'))
              tempEl.text(temp)
              windEl.text(wind)
              humidityEl.text(humidity)
              iconEl.attr('src', iconURL(icon))
            }
          })
        })
      })
    })

  // Function to build icon source URL
  function iconURL(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  // Function to return unix code for given day / hour
  function getUnixCode(day, hour) {
    let unix = dayjs()
      .add(day, 'd')
      .hour(hour)
      .startOf('hour')
      .unix()
    return unix;
  }
})