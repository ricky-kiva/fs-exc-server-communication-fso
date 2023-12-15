import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = { name: newName }

    const duplicatePerson = persons.find(person => person.name === personObject.name)
    const isDuplicate = JSON.stringify(personObject) === JSON.stringify(duplicatePerson)

    isDuplicate 
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject))

    setNewName('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input
            value={newName} 
            onChange={handleNameChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, i) =>
          <div key={i}>{person.name}</div>  
        )}
      </div>
    </div>
  )
}

export default App
