//("client side JS")

const weatherForm = document.querySelector('#weather-form')
const address = document.querySelector('#location')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')
const temperatureP = document.querySelector('#temperature')
const locationP = document.querySelector('#locationP')
const humidityP = document.querySelector('#humidityP')
const rainP = document.querySelector('#rainP')
const descriptionP = document.querySelector('#descriptionP')

const selectorsArr = [temperatureP, locationP, humidityP, rainP, descriptionP]

const setInitialText = (selectorsArr) => {
    selectorsArr.forEach(i => {
        i.textContent = '♥'
    });
}
setInitialText(selectorsArr)

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    temperatureP.textContent = 'Loading...'
    const url = `http://api.weatherstack.com/current?access_key=3a23847a32b8510cae16e7016c5c125d&query=${address.value}`
    
    fetch(url).then((response) => {
        response.json().then((data) => {
            data.error ? 
            temperatureP.textContent = 'error' :
            locationP.textContent = address.value
            temperatureP.textContent = `${data.current.temperature}°`
            humidityP.textContent = `Humidity: ${data.current.humidity}%`
            rainP.textContent = `Rain: ${data.current.precip}%`
            descriptionP.textContent = data.current.weather_descriptions
        })
    })
})