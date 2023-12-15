import { useState } from "react"

const Filter = ({ filter, onFilterChange }) =>
  <form>
  filter shown with
  <input 
    value={filter}
    onChange={onFilterChange}
  />
  </form>

const PersonForm = (props) => {
  const { submitHandler, name, onNameChange, number, onNumberChange } = props

  return (
    <form onSubmit={submitHandler}>
      <div>
        name: 
        <input
          value={name} 
          onChange={onNameChange} 
        />
      </div>
      <div>
        number:
        <input 
          value={number}
          onChange={onNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons }) =>
  <div>
    {persons.map(person =>
      <div key={person.id}>{person.name} {person.number}</div>  
    )}
  </div>

const App = () => {
  const dummyPersons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]

  const [persons, setPersons] = useState(dummyPersons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const duplicateNameIndex = persons.findIndex(person => person.name === personObject.name)

    if (duplicateNameIndex === -1) {
      setPersons(persons.concat(personObject))
    } else {
      alert(`${newName} is already added to phonebook`)
    }

    setNewName('')
    setNewNumber('')
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
      <Persons persons={displayedPersons}/>
    </div>
  )
}

export default App
