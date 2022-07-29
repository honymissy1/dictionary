import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count-1)}>-</button>
      <button onClick={() => setCount(count+1)}>+</button>

      {
        count > 10 && (<h1 style={{color: 'red'}}>We have {count}</h1>)
      }
    </div>
  )
}

export default App
