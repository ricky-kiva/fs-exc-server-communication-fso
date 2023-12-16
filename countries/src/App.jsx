import { useEffect, useState } from "react"
import countryService from "./services/countries"

const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService.getAll()
      .then(initialCountries => setCountries(initialCountries))
  }, [])

  return (
    <div>
      {countries.map((c, i) => 
        <div key={i}>{c.name.common}</div>
      )}
    </div>
  )
}

export default App
