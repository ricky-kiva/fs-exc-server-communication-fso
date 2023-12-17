import axios from "axios"

const baseUrl = 'http://api.openweathermap.org'

const getWeather = (lat, lon) => axios
    .get(`${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API}`)
    .then(response => response.data)

export default { getWeather }