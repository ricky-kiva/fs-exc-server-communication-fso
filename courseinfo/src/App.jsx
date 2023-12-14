const Header = ({ name }) => 
  <h2>{name}</h2>

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

  const total = parts.reduce((acc, part) => acc + part.exercises, 0)
  
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <h3>total of {total} exercises</h3>
    </div>
  )
}

const App = () => {
  const courses = [
    {
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
    }, {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        }, {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </div>
    
  )
}

export default App