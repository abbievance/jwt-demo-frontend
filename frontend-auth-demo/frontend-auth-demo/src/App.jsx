import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'
import Register from './register'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get("TOKEN");

async function getData(){
  const res = await fetch(`http://localhost:3000/auth-endpoint`, {
    headers: {
      Authorization: `Bearer ${token}`
      
    }
  });
  console.log(await res.json())
}

function App() {
  const [count, setCount] = useState(0)
  getData();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    <Login></Login>
    <Register></Register>
    </>

  )
}

export default App
