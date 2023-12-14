const Header = ({ name }) => 
  <h1>{name}</h1>

const Content = ({ parts }) =>
  <div>
    {parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )}
  </div>

const Part = ({ name, exercises }) => 
  <p>{name} {exercises}</p>

const Course = ({ course }) => {
  const { name, parts } = course

  let total = 0
  parts.forEach(part => total += part.exercises)
  
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      }, {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      }, {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }, {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App