import { useState } from "react"
import CapitalWeather from './CapitalWeather'

const Country = ({ country }) => {
    const [imageLoad, setImageLoad] = useState(false)

    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>
                <div>capital {country.capital[0]}</div>
                <div>area {country.area}</div>
            </div>
            <h4>languages:</h4>
            <ul>
                {Object.entries(country.languages).map(([code, lang], i) => (
                    <li key={`${i}_${code}}`}>{lang}</li>
                ))}
            </ul>
            {imageLoad ? null : <p>Loading image..</p> }
            <img 
                src={country.flags.svg} 
                alt={country.flags.alt} 
                style={imageLoad ? { maxHeight: '148px' } : { display: 'none' }}
                onLoad={() => setImageLoad(true)}
            />
            <CapitalWeather 
                name={country.capital[0]}
                lat={country.capitalInfo.latlng[0]}
                lon={country.capitalInfo.latlng[1]}
            />
        </div>
    )
}
export default Country