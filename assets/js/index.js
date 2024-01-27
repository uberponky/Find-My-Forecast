/*$(function() {
  const API = 'fdeabcbe2a5f2a291f6081b9c648f575';
  //let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  // 5 Day - https://openweathermap.org/forecast5
  // Today - https://openweathermap.org/current

  const cityName = 'London'
  const geocodingURL =  `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},GB&appid=${API}`

  fetch(geocodingURL)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      const lon = data[0].lon
      const lat = data[0].lat
      

      // This fetch returns the weather conditions for th current day
      currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`
      fetch(currentURL)
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          //console.log(data);
          // Temp
          const temp = (data.main.temp - 273.15).toFixed(2)
          // Wind
          const wind = data.wind.speed + 'KPH'
          // Humidity
          const humidity = data.main.humidity
          // Icon
          const iconCode = data.weather[0].icon

          console.log(`${temp} - ${wind} - ${humidity} - ${iconCode}`);
        })

      // This fetch returns the 5 day forecast as an array
      // Think I need to make strings for the following 5 days and then loop
      // through the list, returning the relevant weather stuff for each day
      const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`
      fetch(forecastURL)
        .then(function(response) {
          return response.json()
        })
        .then(function(data) {
          // List of all times
          const list = data.list

          // Get relevant data from Forecast Object and store in timeData array
          const timeData = []
          for (let i = 1; i < 6; i++) {
            // TODO - Find a way of getting it to do this in one line using .? or something similar
            let timeDataEl;
            // Try to get noon data
            if (timeDataEl = data.list.find((time) => time.dt == getUnixCode(i, 12))) {
              timeData.push(timeDataEl)
              continue
            }
            // If noon data isnt available, get earliest possible time
            if (timeDataEl = data.list.find((time) => time.dt == getUnixCode(i, 0))) {
              timeData.push(timeDataEl)
              continue
            }
            throw new Error(`Could not retrieve date element from ${i}th element of data list`);
          }

        })
    })

    function getUnixCode(day, hour) {
      let unix = dayjs()
        .add(day, 'd')
        .hour(hour)
        .startOf('hour')
        .unix()
      return unix;
    }
    
})*/



// HOW TO GET ICON
//https://openweathermap.org/weather-conditions

// Potential other options
// Convert to MPH and Fahrenheight

/* CURRENT 
{
    "coord": {
        "lon": -0.1278,
        "lat": 51.5074
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 279.91,
        "feels_like": 278.08,
        "temp_min": 277.76,
        "temp_max": 281.55,
        "pressure": 1033,
        "humidity": 84
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 220
    },
    "clouds": {
        "all": 100
    },
    "dt": 1706355221,
    "sys": {
        "type": 2,
        "id": 2075535,
        "country": "GB",
        "sunrise": 1706341618,
        "sunset": 1706373542
    },
    "timezone": 0,
    "id": 2643743,
    "name": "London",
    "cod": 200
}
*/

/* FORECAST
{
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1706356800,
            "main": {
                "temp": 278.13,
                "feels_like": 275.2,
                "temp_min": 278.13,
                "temp_max": 279.61,
                "pressure": 1034,
                "sea_level": 1034,
                "grnd_level": 1030,
                "humidity": 85,
                "temp_kf": -1.48
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 46
            },
            "wind": {
                "speed": 3.64,
                "deg": 199,
                "gust": 7.91
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-27 12:00:00"
        },
        {
            "dt": 1706367600,
            "main": {
                "temp": 279.34,
                "feels_like": 276.38,
                "temp_min": 279.34,
                "temp_max": 280.31,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 1028,
                "humidity": 80,
                "temp_kf": -0.97
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 73
            },
            "wind": {
                "speed": 4.17,
                "deg": 185,
                "gust": 7.8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-27 15:00:00"
        },
        {
            "dt": 1706378400,
            "main": {
                "temp": 278.61,
                "feels_like": 275.59,
                "temp_min": 278.61,
                "temp_max": 278.61,
                "pressure": 1031,
                "sea_level": 1031,
                "grnd_level": 1028,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.98,
                "deg": 176,
                "gust": 8.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-27 18:00:00"
        },
        {
            "dt": 1706389200,
            "main": {
                "temp": 277.59,
                "feels_like": 274.34,
                "temp_min": 277.59,
                "temp_max": 277.59,
                "pressure": 1030,
                "sea_level": 1030,
                "grnd_level": 1027,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.97,
                "deg": 168,
                "gust": 10.3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-27 21:00:00"
        },
        {
            "dt": 1706400000,
            "main": {
                "temp": 277.83,
                "feels_like": 274.56,
                "temp_min": 277.83,
                "temp_max": 277.83,
                "pressure": 1028,
                "sea_level": 1028,
                "grnd_level": 1025,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 4.1,
                "deg": 172,
                "gust": 11.12
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-28 00:00:00"
        },
        {
            "dt": 1706410800,
            "main": {
                "temp": 277.19,
                "feels_like": 273.84,
                "temp_min": 277.19,
                "temp_max": 277.19,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 1023,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 3.98,
                "deg": 166,
                "gust": 10.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-28 03:00:00"
        },
        {
            "dt": 1706421600,
            "main": {
                "temp": 277.46,
                "feels_like": 274.03,
                "temp_min": 277.46,
                "temp_max": 277.46,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 1021,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 4.23,
                "deg": 168,
                "gust": 11.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-28 06:00:00"
        },
        {
            "dt": 1706432400,
            "main": {
                "temp": 278.65,
                "feels_like": 275.26,
                "temp_min": 278.65,
                "temp_max": 278.65,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.69,
                "deg": 166,
                "gust": 13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-28 09:00:00"
        },
        {
            "dt": 1706443200,
            "main": {
                "temp": 282.04,
                "feels_like": 279.02,
                "temp_min": 282.04,
                "temp_max": 282.04,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1019,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.88,
                "deg": 181,
                "gust": 14.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-28 12:00:00"
        },
        {
            "dt": 1706454000,
            "main": {
                "temp": 282.81,
                "feels_like": 280.07,
                "temp_min": 282.81,
                "temp_max": 282.81,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1017,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.67,
                "deg": 184,
                "gust": 13.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-28 15:00:00"
        },
        {
            "dt": 1706464800,
            "main": {
                "temp": 281.43,
                "feels_like": 278.51,
                "temp_min": 281.43,
                "temp_max": 281.43,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1017,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.2,
                "deg": 191,
                "gust": 14.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-28 18:00:00"
        },
        {
            "dt": 1706475600,
            "main": {
                "temp": 281.85,
                "feels_like": 278.89,
                "temp_min": 281.85,
                "temp_max": 281.85,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1017,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.57,
                "deg": 191,
                "gust": 14.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-28 21:00:00"
        },
        {
            "dt": 1706486400,
            "main": {
                "temp": 282.74,
                "feels_like": 280.06,
                "temp_min": 282.74,
                "temp_max": 282.74,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1017,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.45,
                "deg": 201,
                "gust": 14.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-29 00:00:00"
        },
        {
            "dt": 1706497200,
            "main": {
                "temp": 282.24,
                "feels_like": 279.49,
                "temp_min": 282.24,
                "temp_max": 282.24,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1017,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.3,
                "deg": 207,
                "gust": 14.3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-29 03:00:00"
        },
        {
            "dt": 1706508000,
            "main": {
                "temp": 282.05,
                "feels_like": 279.35,
                "temp_min": 282.05,
                "temp_max": 282.05,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 1017,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.04,
                "deg": 202,
                "gust": 13.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-29 06:00:00"
        },
        {
            "dt": 1706518800,
            "main": {
                "temp": 282.82,
                "feels_like": 280.37,
                "temp_min": 282.82,
                "temp_max": 282.82,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.9,
                "deg": 199,
                "gust": 14.14
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-29 09:00:00"
        },
        {
            "dt": 1706529600,
            "main": {
                "temp": 285.34,
                "feels_like": 284.6,
                "temp_min": 285.34,
                "temp_max": 285.34,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.54,
                "deg": 202,
                "gust": 15.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-29 12:00:00"
        },
        {
            "dt": 1706540400,
            "main": {
                "temp": 285.64,
                "feels_like": 284.9,
                "temp_min": 285.64,
                "temp_max": 285.64,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.95,
                "deg": 196,
                "gust": 12.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-29 15:00:00"
        },
        {
            "dt": 1706551200,
            "main": {
                "temp": 283.43,
                "feels_like": 282.71,
                "temp_min": 283.43,
                "temp_max": 283.43,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.65,
                "deg": 181,
                "gust": 10.91
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-29 18:00:00"
        },
        {
            "dt": 1706562000,
            "main": {
                "temp": 282.84,
                "feels_like": 280.59,
                "temp_min": 282.84,
                "temp_max": 282.84,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.4,
                "deg": 176,
                "gust": 12.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-29 21:00:00"
        },
        {
            "dt": 1706572800,
            "main": {
                "temp": 283.07,
                "feels_like": 280.78,
                "temp_min": 283.07,
                "temp_max": 283.07,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.64,
                "deg": 182,
                "gust": 12.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-30 00:00:00"
        },
        {
            "dt": 1706583600,
            "main": {
                "temp": 282.3,
                "feels_like": 280.22,
                "temp_min": 282.3,
                "temp_max": 282.3,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.77,
                "deg": 187,
                "gust": 10.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-30 03:00:00"
        },
        {
            "dt": 1706594400,
            "main": {
                "temp": 282.43,
                "feels_like": 280.6,
                "temp_min": 282.43,
                "temp_max": 282.43,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 1018,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.34,
                "deg": 186,
                "gust": 9.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-30 06:00:00"
        },
        {
            "dt": 1706605200,
            "main": {
                "temp": 283.03,
                "feels_like": 280.59,
                "temp_min": 283.03,
                "temp_max": 283.03,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.99,
                "deg": 184,
                "gust": 12.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-30 09:00:00"
        },
        {
            "dt": 1706616000,
            "main": {
                "temp": 284.2,
                "feels_like": 283.74,
                "temp_min": 284.2,
                "temp_max": 284.2,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 1019,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 5.03,
                "deg": 212,
                "gust": 9.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-30 12:00:00"
        },
        {
            "dt": 1706626800,
            "main": {
                "temp": 282.25,
                "feels_like": 279.91,
                "temp_min": 282.25,
                "temp_max": 282.25,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 1020,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.29,
                "deg": 254,
                "gust": 8.22
            },
            "visibility": 10000,
            "pop": 0.28,
            "rain": {
                "3h": 0.13
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-30 15:00:00"
        },
        {
            "dt": 1706637600,
            "main": {
                "temp": 280.82,
                "feels_like": 277.58,
                "temp_min": 280.82,
                "temp_max": 280.82,
                "pressure": 1026,
                "sea_level": 1026,
                "grnd_level": 1023,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.61,
                "deg": 275,
                "gust": 8.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-30 18:00:00"
        },
        {
            "dt": 1706648400,
            "main": {
                "temp": 280.81,
                "feels_like": 277.57,
                "temp_min": 280.81,
                "temp_max": 280.81,
                "pressure": 1028,
                "sea_level": 1028,
                "grnd_level": 1025,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 5.61,
                "deg": 291,
                "gust": 8.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-30 21:00:00"
        },
        {
            "dt": 1706659200,
            "main": {
                "temp": 279.3,
                "feels_like": 276.4,
                "temp_min": 279.3,
                "temp_max": 279.3,
                "pressure": 1030,
                "sea_level": 1030,
                "grnd_level": 1027,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 4.04,
                "deg": 277,
                "gust": 8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-31 00:00:00"
        },
        {
            "dt": 1706670000,
            "main": {
                "temp": 276.84,
                "feels_like": 274.03,
                "temp_min": 276.84,
                "temp_max": 276.84,
                "pressure": 1030,
                "sea_level": 1030,
                "grnd_level": 1027,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 3.07,
                "deg": 261,
                "gust": 7.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-31 03:00:00"
        },
        {
            "dt": 1706680800,
            "main": {
                "temp": 276.41,
                "feels_like": 273.04,
                "temp_min": 276.41,
                "temp_max": 276.41,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 1029,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 3.74,
                "deg": 242,
                "gust": 9.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-31 06:00:00"
        },
        {
            "dt": 1706691600,
            "main": {
                "temp": 276.94,
                "feels_like": 273.01,
                "temp_min": 276.94,
                "temp_max": 276.94,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 1029,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.93,
                "deg": 229,
                "gust": 11.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-31 09:00:00"
        },
        {
            "dt": 1706702400,
            "main": {
                "temp": 280.03,
                "feels_like": 276.2,
                "temp_min": 280.03,
                "temp_max": 280.03,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 1029,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 6.64,
                "deg": 230,
                "gust": 12.9
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-31 12:00:00"
        },
        {
            "dt": 1706713200,
            "main": {
                "temp": 280.29,
                "feels_like": 276.48,
                "temp_min": 280.29,
                "temp_max": 280.29,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 1029,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.81,
                "deg": 231,
                "gust": 13.8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-31 15:00:00"
        },
        {
            "dt": 1706724000,
            "main": {
                "temp": 279.41,
                "feels_like": 275.36,
                "temp_min": 279.41,
                "temp_max": 279.41,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 1029,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.78,
                "deg": 229,
                "gust": 14.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-31 18:00:00"
        },
        {
            "dt": 1706734800,
            "main": {
                "temp": 279.13,
                "feels_like": 274.91,
                "temp_min": 279.13,
                "temp_max": 279.13,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 1029,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.03,
                "deg": 232,
                "gust": 15.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-31 21:00:00"
        },
        {
            "dt": 1706745600,
            "main": {
                "temp": 279.08,
                "feels_like": 275.02,
                "temp_min": 279.08,
                "temp_max": 279.08,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 1029,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 6.55,
                "deg": 232,
                "gust": 15.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-01 00:00:00"
        },
        {
            "dt": 1706756400,
            "main": {
                "temp": 278.79,
                "feels_like": 274.63,
                "temp_min": 278.79,
                "temp_max": 278.79,
                "pressure": 1031,
                "sea_level": 1031,
                "grnd_level": 1028,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 6.59,
                "deg": 226,
                "gust": 15.12
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-01 03:00:00"
        },
        {
            "dt": 1706767200,
            "main": {
                "temp": 278.77,
                "feels_like": 274.49,
                "temp_min": 278.77,
                "temp_max": 278.77,
                "pressure": 1031,
                "sea_level": 1031,
                "grnd_level": 1028,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 84
            },
            "wind": {
                "speed": 6.91,
                "deg": 229,
                "gust": 16.21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-01 06:00:00"
        },
        {
            "dt": 1706778000,
            "main": {
                "temp": 279.42,
                "feels_like": 275.45,
                "temp_min": 279.42,
                "temp_max": 279.42,
                "pressure": 1031,
                "sea_level": 1031,
                "grnd_level": 1029,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.57,
                "deg": 235,
                "gust": 16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-01 09:00:00"
        }
    ],
    "city": {
        "id": 2643743,
        "name": "London",
        "coord": {
            "lat": 51.5073,
            "lon": -0.1276
        },
        "country": "GB",
        "population": 1000000,
        "timezone": 0,
        "sunrise": 1706341618,
        "sunset": 1706373541
    }
}
*/