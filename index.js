/*
http://api.weatherstack.com/current
    ? access_key = e0d9c4ac64bf2fecf325bc5eaa573b94
    & query = New York
*/
// import 'dotenv/config';
import { mockData } from "./mockData.js";

const cities = ['San Diego'] //, 'San Diego', 'Phoenix', 'Miami', 'Austin', 'Tacoma']
let dataArr = []

const previewMaker = (data) => {
    data.forEach((el, i) => {

        const card = document.createElement('div')
        card.className = 'preview item card-box'
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

    })
}

const allItems = document.querySelectorAll('.card-box')
const main = document.getElementById('main')
const favs = document.getElementById('faves')

const updateCollections = (id, direction) => {
    const targetElm = document.getElementById(id)
    const targetClass2 = targetElm.getElementsByClassName('item')
    const nodeArr = Array.from(targetClass2)
    const main = document.getElementById('main')
    const favs = document.getElementById('favs')

    if (direction === 'toFavs') {
        favs.appendChild(targetElm)
        targetElm.classList.remove('preview')
        targetElm.childNodes[0].classList.remove('preview2')
        for (let el of nodeArr) {
            el.classList.remove('not-visible')
        }
        targetElm.classList.add('card')
        targetElm.childNodes[0].classList.add('card-contents')
    }
    if (direction === 'toMain') {
        main.appendChild(targetElm)
        targetElm.classList.remove('card')
        targetElm.childNodes[0].classList.remove('card-contents')
        for (let el of nodeArr) {
            el.classList.add('not-visible')
        }
        targetElm.classList.add('preview')
        targetElm.childNodes[0].classList.add('preview2')
    }
}

// const weatherKey = '9bfbbba445c4fa0736a5b80b6c7e0e06'

// const weatherKey = process.env.WEATHER_API_KEY;
// fetch(`http://api.weatherstack.com/current?access_key=${weatherKey}&query=${cities}`).then((el) => el.json()).then((el) => console.log(el))
// const weatherAPI = fetch(`http://api.weatherstack.com/current?access_key=${weatherKey}&query=Surprise`)

// const eventListener = ()

const fetchData = () => {
    // turn ALL cities into an ARRAY of Promises
    // Await for ALL promises to come back
    // Transform ALL resolved promises into cards
    // then you have your cards


    const promisesArray = cities.map((city) => fetch(`http://api.weatherstack.com/current?access_key=${weatherKey}&query=${city}`)) // undefined
    return Promise.all(promisesArray)
        .then((data) => data.json())
        // .then((data) => data.push(dataArr))
        .then((data) => console.log(data))
        .then((data) => previewMaker(data))
        .catch((error) => console.error('Fetch error: ', error))
}

const addEvent = (arg) => {
    for (let el of arg) {
        el.addEventListener('click', () => {
            if (el.parentElement.id === 'main') {
                return updateCollections(el.id, 'toFavs')
            }
            if (el.parentElement.id === 'favs') {
                return updateCollections(el.id, 'toMain')
            }
        })
    }
}


window.onload = () => {
    return fetchData(cities)
        .then(addEvent(allItems));
}
