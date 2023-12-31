import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'

function App() {

  return (
    <div>
      <Navbar />
      <Homepage/>
    </div>
  )
}

export default App
