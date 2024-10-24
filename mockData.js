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
