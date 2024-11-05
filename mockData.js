const mockData = [
  {
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
},
{
  request: {
    type: 'City',
    query: 'San Diego, United States of America',
    language: 'en',
    unit: 'm'
  },
  location: {
    name: 'San Diego',
    country: 'United States of America',
    region: 'California',
    lat: '32.715',
    lon: '-117.156',
    timezone_id: 'America/Los_Angeles',
    localtime: '2024-10-28 18:21',
    localtime_epoch: 1730139660,
    utc_offset: '-7.0'
  },
  current: {
    observation_time: '01:21 AM',
    temperature: 18,
    weather_code: 116,
    weather_icons: [
      'https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png'
    ],
    weather_descriptions: [ 'Partly cloudy' ],
    wind_speed: 25,
    wind_degree: 274,
    wind_dir: 'W',
    pressure: 1013,
    precip: 0,
    humidity: 73,
    cloudcover: 50,
    feelslike: 18,
    uv_index: 0,
    visibility: 16,
    is_day: 'no'
  }
},
{
  "request": {
      "type": "City",
      "query": "New York, United States of America",
      "language": "en",
      "unit": "m"
  },
  "location": {
      "name": "New York",
      "country": "United States of America",
      "region": "New York",
      "lat": "40.714",
      "lon": "-74.006",
      "timezone_id": "America/New_York",
      "localtime": "2019-09-07 08:14",
      "localtime_epoch": 1567844040,
      "utc_offset": "-4.0"
  },
  "current": {
      "observation_time": "12:14 PM",
      "temperature": 9,
      "weather_code": 113,
      "weather_icons": [
          "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
      ],
      "weather_descriptions": [
          "Sunny"
      ],
      "wind_speed": 0,
      "wind_degree": 349,
      "wind_dir": "N",
      "pressure": 1010,
      "precip": 0,
      "humidity": 90,
      "cloudcover": 0,
      "feelslike": 13,
      "uv_index": 4,
      "visibility": 16
  }
}
]
