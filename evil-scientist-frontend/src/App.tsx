import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Login } from './Components/Login'
import { Dashboard } from './Components/Dashboard'
import { Register } from './Components/Register'

function App() {
 

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
