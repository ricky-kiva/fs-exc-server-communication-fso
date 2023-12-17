import { useEffect, useState } from "react"
import FindCountry from "./components/FindCountry"
import CountryList from "./components/CountryList"
import countryService from "./services/countries"

const App = () => {
  const [countries, setCountries] = useState([])
  const [found, setFound] = useState([])

  useEffect(() => {
    countryService.getAll()
      .then(initialCountries => setCountries(initialCountries))
  }, [])

  const foundChangeHandler = (event) => {
    const text = event.target.value
    if (text.length === 0) {
      setFound([])
    } else {
      setFound(countries.filter(c => 
        c.name.common.toLowerCase()
          .includes(text.toLowerCase())
      ))
    }
  }

  if (countries.length === 0) {
    return <div>Loading..</div>
  }

  return (
    <div>
      <FindCountry findHandler={foundChangeHandler} />
      <CountryList found={found} showHandler={setFound}/>
    </div>
  )
}

export default App
