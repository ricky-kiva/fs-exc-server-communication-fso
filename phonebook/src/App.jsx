import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/persons"

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const titleCaseName = toTitleCase(newName)
    const personObject = {
      name: titleCaseName,
      number: newNumber,
    }

    const duplicatePerson = persons.find(person => 
      person.name.toLowerCase() === personObject.name.toLowerCase()
    )

    if (duplicatePerson) {
      const confirmMessage = `${duplicatePerson.name} is already added to phonebook, replace the old number with a new one?`
      if (window.confirm(confirmMessage)) {
        const updatedPerson = { ...duplicatePerson, number: newNumber }
        personService.update(duplicatePerson.id, updatedPerson).then(returnedPerson => 
          setPersons(persons.map(p => p.id !== duplicatePerson.id ? p : returnedPerson))
        )

        setNewName('')
        setNewNumber('')
      }
    } else {
      personService.create(personObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })

      setNewName('')
      setNewNumber('')
    }
  }

  const deletePerson = id => {
    const targetPerson = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${targetPerson.name} ?`)) {
      personService.del(id)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleNameFilterChange = (event) => setNameFilter(event.target.value)

  const displayedPersons = nameFilter
    ? persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={nameFilter} onFilterChange={handleNameFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        submitHandler={addPerson}
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={displayedPersons} deleteHandler={deletePerson}/>
    </div>
  )
}

const toTitleCase = (s) => s.replace(/([^\W_]+[^\s-]*) */g, (txt) => (
  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
))

export default App
