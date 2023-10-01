import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'
import Tugas from './components/tugas';


function App() {

  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">
        <h1>Tugas modul 3 Kel 25</h1>
        <Tugas />

      </div>
    </>
  )
}

export default App
