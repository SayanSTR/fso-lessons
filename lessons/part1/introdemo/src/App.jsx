const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/SayanSTR'>SayanSTR</a>
    </div>
  )
}

const App = () => {
  const now = new Date()
  console.log(now)
  const name = 'Peter'
  const age = 10
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='George' age='40' />
      <Hello name={name} age={age} />
      <Hello name='Sayan' age={18 + 10} />
      <div>
        <p>{friends[0].name} {friends[0].age}</p>
        <p>{friends[1].name} {friends[1].age}</p>
      </div>

      <Footer />
    </>
  )
}

export default App