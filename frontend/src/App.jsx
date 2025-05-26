import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-6">
      <div className="flex space-x-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-24 h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <div className="card bg-gray-100 p-6 rounded shadow-md flex flex-col items-center space-y-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </button>
        <p className="text-center">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center text-gray-600 max-w-sm font-graphik">
        Click on the Vite and React logos to learn more
      </p>
      <Link
        to="/about"
        className=" text-blue-600 hover:underline"
      >
        Go to About page
      </Link>
    </div>
  )
}


function About() {
  return <h2>About page</h2>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App