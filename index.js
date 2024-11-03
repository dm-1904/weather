

const weatherKey = '9bfbbba445c4fa0736a5b80b6c7e0e06'
const cities = ['Surprise', 'Phoenix', 'San Diego', 'Miami', 'Austin', 'Tacoma']
const sortBtn = document.querySelectorAll('.sortBtn')

const fetchWeather = (cityArr) => {

  const promisesArray = cityArr.map((city) => {
    return fetch(`http://api.weatherstack.com/current?access_key=${weatherKey}&query=${city}`)
      .then((response) => {
        if (!response.ok) {
          throw Error('Error in fetching weather data')
        }
        return response.json()
      })
  })

  Promise.all(promisesArray)
    .then((results) => {
      const total = document.createElement('span')
      total.className = 'total'
      total.textContent = `Number of cities: ${results.length}`
      document.getElementsByClassName('instructions')[0].append(total)

      results.forEach((el, i) => {

        const card = document.createElement('div')
        card.className = 'preview card-box' // removed item class
        card.id = i + 1
        document.getElementsByClassName('available-container')[0].append(card)

        const cardContents = document.createElement('div')
        cardContents.className = 'preview2'
        document.getElementsByClassName('card-box')[i].append(cardContents)

        const cardIcon = document.createElement('div')
        cardIcon.className = 'card-icon'
        document.getElementsByClassName('preview2')[i].append(cardIcon)

        const iconImg = document.createElement('img')
        iconImg.className = 'not-visible item'
        iconImg.setAttribute('src', el.current.weather_icons[0])
        document.getElementsByClassName('card-icon')[i].append(iconImg)

        const cardData = document.createElement('div')
        cardData.className = 'card-data'
        document.getElementsByClassName('preview2')[i].append(cardData)

        const cardCity = document.createElement('h1')
        cardCity.textContent = el.location.name
        cardCity.className = 'card-city'
        document.getElementsByClassName('card-data')[i].append(cardCity)

        const cardState = document.createElement('h2')
        cardState.textContent = el.location.region
        cardState.className = 'card-state'
        document.getElementsByClassName('card-data')[i].append(cardState)

        const cardTemp = document.createElement('span')
        cardTemp.textContent = `${el.current.temperature}°C`
        cardTemp.className = 'card-temp'
        document.getElementsByClassName('card-data')[i].append(cardTemp)

        const cardSub = document.createElement('div')
        cardSub.className = 'not-visible card-sub-data item'
        document.getElementsByClassName('card-data')[i].append(cardSub)

        const cardSky = document.createElement('span')
        cardSky.textContent = `Sky: ${el.current.weather_descriptions[0]}`
        cardSky.className = 'card-sky'
        document.getElementsByClassName('card-sub-data')[i].append(cardSky)

        const cardTime = document.createElement('span')
        cardTime.textContent = `Time: ${el.location.localtime}`
        cardTime.className = 'card-time'
        document.getElementsByClassName('card-sub-data')[i].append(cardTime)

        const cardWind = document.createElement('span')
        cardWind.textContent = `Wind Speed: ${el.current.wind_speed} MPH`
        cardWind.className = 'card-wind-speed'
        document.getElementsByClassName('card-sub-data')[i].append(cardWind)

        const cardWindDir = document.createElement('span')
        cardWindDir.textContent = `Wind Dir: ${el.current.wind_dir}`
        cardWindDir.className = 'card-wind-dir'
        document.getElementsByClassName('card-sub-data')[i].append(cardWindDir)

        const cardHumidity = document.createElement('span')
        cardHumidity.textContent = `Humidity: ${el.current.humidity}%`
        cardHumidity.className = 'card-humidity'
        document.getElementsByClassName('card-sub-data')[i].append(cardHumidity)

        card.addEventListener('click', () => {
            const targetClass = card.getElementsByClassName('item')
            const nodeArr = Array.from(targetClass)
          if (card.parentElement.id === 'main') {
            document.getElementById('favs').appendChild(card)
            card.classList.remove('preview')
            card.childNodes[0].classList.remove('preview2')
                for (let el of nodeArr) {
                    el.classList.remove('not-visible')
                }
            card.classList.add('card')
            card.childNodes[0].classList.add('card-contents')
          } else {
            main.appendChild(card)
            card.classList.remove('card')
            card.childNodes[0].classList.remove('card-contents')
                for (let el of nodeArr) {
                    el.classList.add('not-visible')
                }
            card.classList.add('preview')
            card.childNodes[0].classList.add('preview2')
          }
        })

      })
    })
    .catch((err) => console.log(err))
}

fetchWeather(cities)


const sortData = (direction) => {
  const container = document.getElementById('main')
  const sortedCards = Array.from(container.children).sort((card1, card2) => {
    const name1 = card1.getElementsByClassName('card-city')[0].textContent
    const name2 = card2.getElementsByClassName('card-city')[0].textContent

    if (direction === 'asc') {
      if (name1 < name2) {
        return -1
      }
      else if (name1 > name2) {
        return 1
      } else {
        return 0
      }
    } else {
      if (name1 > name2) {
        return -1
      }
      else if (name1 < name2) {
        return 1
      } else {
        return 0
      }
    }
  })

  sortedCards.forEach((item) => {
    container.appendChild(item)
  })
}


for (let btn of sortBtn) {
  btn.addEventListener('click', () => {
    return sortData(btn.dataset.sortdir)
  })
}
