import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
