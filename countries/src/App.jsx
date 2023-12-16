import { useEffect, useState } from "react"
import Country from "./components/Country"
import countryService from "./services/countries"


const App = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService.getAll()
      .then(initialCountries => setCountries(initialCountries))
  }, [])

  if (countries.length === 0) {
    return <div>Loading..</div>
   }

  return (
    <div>
      <Country country={countries[0]}/>
    </div>
  )
}

export default App
