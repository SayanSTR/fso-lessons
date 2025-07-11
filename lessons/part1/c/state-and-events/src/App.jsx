import './App.css'
import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  console.log('App start...', clicks)

  const handleLeftClick = () => {
    const updatedLeft = clicks.left + 1
    setClicks({ ...clicks, left: updatedLeft })
    setAll(allClicks.concat('L'))
    setTotal(updatedLeft + clicks.right)
    console.log('App clicks: ', clicks, 'total:', total)
  }

  const handleRightClick = () => {
    const updatedRight = clicks.right + 1
    setClicks({ ...clicks, right: updatedRight })
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + updatedRight)
    console.log('App clicks: ', clicks, 'total:', total)
  }

  return (
    console.log('App returning...', clicks, 'total:', total),
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {clicks.right}
      <p>total {total}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App