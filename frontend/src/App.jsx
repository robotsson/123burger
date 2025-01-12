import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // fetch('https://fakestoreapi.com/products/1')
  // .then(res=>res.json())
  // .then(json=>console.log(json))
  
  async function fetchjson() {
    const response = await fetch('https://localhost:7210/api/burgerproducts');
    const data = await response.json();
    return data;
  }

  async function postjson() {
    try {
      const response = await fetch('https://localhost:7210/api/burgerorders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderTotal: 250,
          orderDate: (new Date()).toISOString(),
          orderItems: [
            {
              quantity: 10,
              burgerProductId: 1
            }
          ]
        })
      });
      const data = await response.json();
      console.log(data);
    } catch(error) {
      console.log(error)
    } 
  }

  fetchjson().then(data => {
    console.log(data); 
  });

  postjson();

  console.log("hello console");

  return (
    <>
      <div className="flex justify-evenly bg-yellow-100 items-end">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold underline">
      Hello Tailwind!
      </h1>
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
    </>
  )
}

export default App
