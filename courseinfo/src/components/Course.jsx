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

export default Course