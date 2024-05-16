import { useState, createContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Users from './pages/Users'


export const Context = createContext();

function App() {

  const [selectedProject, setSelectedProject] = useState();

  return (
    <Context.Provider value={{ selectedProject, setSelectedProject }} >
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route index path='/login' element={<Login />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </Context.Provider>
  )
}

export default App
