/*
http://api.weatherstack.com/current
    ? access_key = e0d9c4ac64bf2fecf325bc5eaa573b94
    & query = New York
*/

// import  mockData  from "./mockData.js";

const mockData = {
    request: {
      type: 'City',
      query: 'Surprise, United States of America',
      language: 'en',
      unit: 'm'
    },
    location: {
      name: 'Surprise',
      country: 'United States of America',
      region: 'Arizona',
      lat: '33.631',
      lon: '-112.333',
      timezone_id: 'America/Phoenix',
      localtime: '2024-10-23 18:28',
      localtime_epoch: 1729708080,
      utc_offset: '-7.0'
    },
    current: {
      observation_time: '01:28 AM',
      temperature: 32,
      weather_code: 113,
      weather_icons: [
        'https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png'
      ],
      weather_descriptions: [ 'Clear' ],
      wind_speed: 4,
      wind_degree: 246,
      wind_dir: 'WSW',
      pressure: 1012,
      precip: 0,
      humidity: 12,
      cloudcover: 0,
      feelslike: 30,
      uv_index: 0,
      visibility: 16,
      is_day: 'no'
    }
  }

// console.log(mockData.location.name)

// const cardCon = document.getElementsByClassName('card-container')


// const weatherKey = process.env.WEATHER_API_KEY;
// console.log(weatherKey);
// const body = document.body;

// const weatherAPI = fetch(`http://api.weatherstack.com/current?access_key=${weatherKey}&query=Surprise`)

// weatherAPI
//   .then((data) => data.json())
//   .then((data) => {
//     // create elements
//     // create a card container with class card
//     const card = document.createElement('div');
//     // define elements
//     card.className = 'card';
//     // append elements to the DOM
//     body.append(card);

//   })
//   .catch((err) => console.log(err));

// const card = document.createElement('div')
//     card.className = 'card'
//     document.getElementsByClassName('.card-container').append(card)



const cardMaker = (data) => {
    const card = document.createElement('div')
    card.className = 'card'
    document.getElementsByClassName('card-container')[0].append(card)

    const cardContents = document.createElement('div')
    cardContents.className = 'card-contents'
    document.getElementsByClassName('card')[0].append(cardContents)

    const cardIcon = document.createElement('div')
    cardIcon.className = 'card-icon'
    document.getElementsByClassName('card-contents')[0].append(cardIcon)

    const iconImg = document.createElement('img')
    iconImg.setAttribute('src', mockData.current.weather_icons[0])
    document.getElementsByClassName('card-icon')[0].append(iconImg)

    const cardData = document.createElement('div')
    cardData.className = 'card-data'
    document.getElementsByClassName('card-contents')[0].append(cardData)

    const cardCity = document.createElement('div')
    cardCity.textContent = data.location.name
    cardCity.className = 'card-city'
    document.getElementsByClassName('card-data')[0].append(cardCity)

    const cardState = document.createElement('div')
    cardState.textContent = data.location.region
    cardState.className = 'card-state'
    document.getElementsByClassName('card-data')[0].append(cardState)

    const cardTemp = document.createElement('div')
    cardTemp.textContent = `${data.current.temperature}°C`
    cardTemp.className = 'card-temp'
    document.getElementsByClassName('card-data')[0].append(cardTemp)

    const cardSub = document.createElement('div')
    cardSub.className = 'card-sub-data'
    document.getElementsByClassName('card-data')[0].append(cardSub)

    const cardSky = document.createElement('div')
    cardSky.textContent = `Sky: ${data.current.weather_descriptions[0]}`
    cardSky.className = 'card-sky'
    document.getElementsByClassName('card-sub-data')[0].append(cardSky)

    const cardTime = document.createElement('div')
    cardTime.textContent = `Time: ${data.location.localtime}`
    cardTime.className = 'card-time'
    document.getElementsByClassName('card-sub-data')[0].append(cardTime)

    const cardWind = document.createElement('div')
    cardWind.textContent = `Wind Speed: ${data.current.wind_speed} MPH`
    cardWind.className = 'card-wind-speed'
    document.getElementsByClassName('card-sub-data')[0].append(cardWind)

    const cardWindDir = document.createElement('div')
    cardWindDir.textContent = `Wind Dir: ${data.current.wind_dir}`
    cardWindDir.className = 'card-wind-dir'
    document.getElementsByClassName('card-sub-data')[0].append(cardWindDir)

    const cardHumidity = document.createElement('div')
    cardHumidity.textContent = `Humidity: ${data.current.humidity}%`
    cardHumidity.className = 'card-humidity'
    document.getElementsByClassName('card-sub-data')[0].append(cardHumidity)
}

cardMaker(mockData)


const updateFavCities = () => {
    
}
