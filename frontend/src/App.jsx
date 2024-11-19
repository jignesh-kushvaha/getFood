import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import MyOrder from './screens/MyOrder'
import { CartProvider } from './components/ContextReducer'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path="/myorder" element={<MyOrder/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
