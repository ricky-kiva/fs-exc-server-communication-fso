import { useEffect, useState } from "react"
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
      find countries <input onChange={foundChangeHandler} />
      <ul>
        {found.map((c, i) => 
          <li key={i}>{c.name.common}</li>
        )}
      </ul>
    </div>
  )
}

export default App
