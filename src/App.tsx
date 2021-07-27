import * as React from 'react'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="flex justify-center flex-col items-center my-10">
      <h1 className="text-5xl mb-8">Hi from maps basic application</h1>
      <button onClick={() => setCount(prevState => prevState + 1)} className="bg-gray-300 py-1 px-2 rounded-sm">
        counter data {'->'} {count}
      </button>
    </div>
  )
}

export default App
