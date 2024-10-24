/*
http://api.weatherstack.com/current
    ? access_key = e0d9c4ac64bf2fecf325bc5eaa573b94
    & query = New York
*/

const weatherKey = 'e0d9c4ac64bf2fecf325bc5eaa573b94'

const weatherAPI = fetch('http://api.weatherstack.com/current?access_key=e0d9c4ac64bf2fecf325bc5eaa573b94&query=Surprise')

weatherAPI
  .then((data) => data.json())
  .then((data) => console.log(data))
