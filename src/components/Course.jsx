const Course = ({ course }) => {
    console.log(course)
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Sum parts={course.parts} />
      </div>
    )
  }
  const Sum = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (<p><strong>total of {total} exercises</strong></p>)
  }
  
  const Header = ({ course }) => {
    return (<h1>{course.name}</h1>)
  }
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  const Part = ({ part }) => {
    return (<p>{part.name} {part.exercises}</p>)
  }

  export default Course