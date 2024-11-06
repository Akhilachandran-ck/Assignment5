import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homedashboard from './component/Homedashboard'
import Employeeform from './component/Employeeform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    <Routes>

<Route path='/h' element={<Homedashboard />}/>
<Route path='/e' element={<Employeeform />}/>

    </Routes>

    </>
  );
}

export default App
