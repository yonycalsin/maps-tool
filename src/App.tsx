import * as React from 'react'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1>Hi from maps basic application</h1>
      <button onClick={() => setCount(prevState => prevState + 1)}>
        counter data {'->'} {count}
      </button>
    </div>
  )
}

export default App
