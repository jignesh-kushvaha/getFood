import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
