import { useEffect, useState } from "react"
import weatherService from '../services/weather'

const CapitalWeather = ({ name, lat, lon }) => {
    const [weatherData, setWeatherData] = useState({})
    const [imageLoad, setImageLoad] = useState(false)

    useEffect(() => {
        if (lat !== undefined && lon !== undefined) {
            weatherService.getWeather(lat, lon)
                .then(data => setWeatherData(data))
        }
    }, [lat, lon])

    return (
        <div>
            <h3>Weather in {name}</h3>
            {Object.keys(weatherData).length !== 0 ?
                <div>
                    <div>temperature {setDecimalPointDigit((weatherData.main.temp - 237), 2)} celcius</div>
                    {imageLoad ? null : <p>Loading weather..</p> }
                    <img 
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        alt={weatherData.weather[0].description}
                        style={imageLoad ? {} : { display: 'none' }}
                        onLoad={() => setImageLoad(true)}
                    />
                    <div>wind {setDecimalPointDigit(weatherData.wind.speed, 2)} m/s</div>
                </div>
                : <p>Loading weather data..</p>
            }
        </div>
    )
}

const setDecimalPointDigit = (num, digit) => (Math.round(num * 100) / 100).toFixed(digit)

export default CapitalWeather