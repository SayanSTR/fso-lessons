import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState({})
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    console.log('useEffect :: effect run, currency is now', currency)

    // skip if currency is not defined
    if (currency) {
      console.log('fetching exchange rates...')
      axios
        .get(`https://open.er-api.com/v6/latest/${currency}`)
        .then(response => {
          // console.log(JSON.stringify(response.data, null, 2))
          console.log(response.data)
          setRates(response.data.rates)
        })
    }
  }, [currency])

  const handleChange = (event) => {
    console.log('handleChange :: value is now', event.target.value)
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    console.log('onSearch :: searching for exchange rates for', value)
    event.preventDefault()
    setCurrency(value)
  }

  console.log('App :: returning JSX with value', value, 'and rates', rates)
  return (
    <div>
      <form onSubmit={onSearch}>
        currency: <input value={value} onChange={handleChange} />
        <button type="submit">exchange rate</button>
      </form>
      <pre>
        {JSON.stringify(rates, null, 2)}
      </pre>
    </div>
  )
}

export default App