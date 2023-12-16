const Country = ({ country }) => 
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
        <img src={country.flags.svg} alt={country.flags.alt} style={{ maxHeight: '148px' }}/>
    </div>

export default Country